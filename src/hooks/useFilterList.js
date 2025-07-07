/* HOOKS */
import { useMemo, useEffect, useContext } from 'react';

{/* CONTEXTS */}
import { AppContext } from '../contexts/AppContext';

{/* HELPERS */}
import { removeAccents } from '../helpers/removeAccents';

export const useFilterList = () => {
    // Obtiene el listado de heroes
    const { heroName, heroesList, dispatch } = useContext(AppContext);

    // Obtiene una lista filtrada de heroes
    const filteredHeroesList = useMemo(() => {
        if(heroesList){
            if(heroName){
                // Filtra la lista segun el nombre que se haya ingresado en la busqueda
                const filteredList = heroesList.filter(({ name }) => {
                    const currentName = removeAccents(name.trim().toLowerCase());
                    
                    return currentName.includes(heroName);
                });

                // Devuelve la lista filtrada
                return filteredList;
            } else {
                // Devuelve la lista sin filtrar
                return heroesList;
            }
        } else {
            return [];
        }
    }, [heroName, heroesList]);

    useEffect(() => {
        dispatch({ type: 'RESET' });
    }, [filteredHeroesList]);

    return {
        heroName, 
        heroesList, 
        filteredHeroesList, 
    }
}