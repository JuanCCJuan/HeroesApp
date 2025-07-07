{/* DEPENDENCIES */}
import PropTypes from 'prop-types';

{/* HOOKS */}
import { useState, useEffect, useReducer, useCallback } from 'react';

{/* CONTEXTS */}
import { AppContext } from '../contexts/AppContext';

// Limite de resultados por pagina
const LIMIT = 60;

// Crea el estado inicial de la paginacion
const initPagination = {
    page: 1, 
    selected: 0, 
};

// Crea el reducer de la paginacion
const reducer = (pagination, action) => {
    const { type, payload } = action;
    const { page, selected } = pagination;

    switch(type){
        case 'NEXT': {
            const newPage = (page < payload) ? page + 1 : page;
            const newSelected = (selected < 4) ? selected + 1 : selected;

            return {
                page: newPage, 
                selected: newSelected, 
            }
        }
        case 'PREVIOUS': {
            const newPage = (page > 1) ? page - 1 : page;
            const newSelected = (selected > 0) ? selected - 1 : selected;

            return {
                page: newPage, 
                selected: newSelected, 
            }
        }
        case 'END': 
            return {
                page: payload, 
                selected: 4, 
            }
        case 'START': 
            return initPagination;
        case 'SELECT': {
            const numberAsAString = `${payload}`;

            const newPage = parseInt(numberAsAString[0]);
            const newSelected = parseInt(numberAsAString[1]);

            return {
                page: newPage, 
                selected: newSelected, 
            }
        }
        default:
            throw new Error();
    }
}

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
    const [heroesList, setHeroesList] = useState(null);

    // Crea un reducer para la paginacion
    const [pagination, dispatch] = useReducer(reducer, initPagination);

    // Memoriza la funcion para obtener heroes
    const getHeroes = useCallback(async () => {
        const heroes = await heroesRequest();
        setHeroesList(heroes);
    }, []);
    
    // Ejecuta solo la primer vez la funcion para obtener heroes
    useEffect(() => {
        getHeroes();
    }, []);

    return(
        <AppContext.Provider value={{ heroName, setHeroName, heroesList, pagination, dispatch, LIMIT }}>
            { children }
        </AppContext.Provider>
    );
}

// Asigna tipo a la propiedad del componente
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};