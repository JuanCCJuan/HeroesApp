{/* STYLES */}
import styles from './Grid.module.css';

{/* HOOKS */}
import { useContext } from 'react';
import { useFilterList } from '../../../../hooks/useFilterList';

{/* CONTEXTS */}
import { AppContext } from '../../../../contexts/AppContext';

{/* COMPONENTS */}
import { HeroCard } from './HeroCard/HeroCard';
import { Spinner, ErrorMessage } from '../../../Shared';

export const Grid = () => {
    const { heroName, heroesList, filteredHeroesList } = useFilterList();

    // Obtiene la paginacion del contexto de la aplicacion
    const { pagination: { page }, LIMIT } = useContext(AppContext);

    if(!heroesList){
        return(
            <Spinner />
        );
    }

    if(heroesList.length === 0){
        const message = heroName ? 'No se encontraron héroes con este nombre.' : 'La solicitud de héroes falló.';

        return(
            <ErrorMessage message={ message } />
        );
    }

    const subList = filteredHeroesList.slice((page - 1) * LIMIT, (page * LIMIT));

    return(
        <div className={ styles.grid }>
            {
                subList.map(hero => {
                    const { id, name, images: { sm }, biography } = hero;

                    return(
                        <HeroCard key={ id } name={ name } image={ sm } biography={ biography } />
                    );
                })
            }
        </div>
    );
}