/* HOOKS */
import { useFilterList } from './useFilterList';
import { useMemo, useState, useEffect, useContext } from 'react';

/* CONTEXTS */
import { AppContext } from '../contexts/AppContext';

export const usePagination = () => {
    // Crea un estado para calcular la base de la paginacion
    const [base, setBase] = useState(0);

    // Obtiene la lista filtrada
    const { filteredHeroesList } = useFilterList();

    // Obtiene la paginacion del contexto de la aplicacion
    const { pagination: { page, selected }, dispatch, LIMIT } = useContext(AppContext);

    const totalPages = useMemo(() => {
        const length = filteredHeroesList.length;

        if((length % LIMIT) === 0){
            return Math.floor(length / LIMIT);
        } else {
            return Math.floor(length / LIMIT) + 1;
        }
    }, [filteredHeroesList]);

    const totalBoxes = useMemo(() => {
        if(totalPages < 5){
            return totalPages;
        } else {
            return 5;
        }
    }, [totalPages]);

    useEffect(() => {
        if(selected === 0){
            setBase(page);
        } else if(selected === 4){
            setBase(page - 4);
        } else {
            setBase(base);
        }
    }, [base, page, selected]);

    return {
        base, 
        selected, 
        dispatch, 
        totalBoxes, 
        totalPages, 
    }
}