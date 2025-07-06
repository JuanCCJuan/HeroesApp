{/* DEPENDENCIES */}
import PropTypes from 'prop-types';

{/* HOOKS */}
import { useState, useEffect, useCallback } from 'react';

{/* CONTEXTS */}
import { AppContext } from '../contexts/AppContext';

// Hace la peticion para obtener la lista de heroes
const heroesRequest = async () => {
    const URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

    // Hace la solicitud al endpoint
    const response = await fetch(URL, { method: 'GET' });

    // Si la respuesta es correcta devuelve el listado de heroes
    if(response.ok){
        const heroes = await response.json();
        return heroes;
    } else {
        return [];
    }
}

export const AppContextProvider = ({ children }) => {
    // Crea un estado para el nombre del heroe en la barra de busqueda
    const [heroName, setHeroName] = useState('');

    // Crea un estado para almacenar la lista de heroes
    const [heroList, setHeroList] = useState(null);

    // Memoriza la funcion para obtener heroes
    const getHeroes = useCallback(async () => {
        const heroes = await heroesRequest();
        setHeroList(heroes);
    }, []);
    
    // Ejecuta solo la primer vez la funcion para obtener heroes
    useEffect(() => {
        getHeroes();
    });

    return(
        <AppContext.Provider value={{ heroName, setHeroName, heroList }}>
            { children }
        </AppContext.Provider>
    );
}

// Asigna tipo a la propiedad del componente
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};