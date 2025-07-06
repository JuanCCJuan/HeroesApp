{/* STYLES */}
import styles from './Grid.module.css';

{/* HOOKS */}
import { useContext } from 'react';

{/* CONTEXTS */}
import { AppContext } from '../../../../contexts/AppContext';

{/* COMPONENTS */}
import { HeroCard } from './HeroCard/HeroCard';
import { Spinner, ErrorMessage } from '../../../Shared';

export const Grid = () => {
    // Obtiene el listado de heroes
    const { heroList } = useContext(AppContext);

    if(!heroList){
        return(
            <Spinner />
        );
    }

    return(
        <div className={ styles.grid }>
            {
                heroList.map(hero => {
                    const { id, name, images: { sm }, biography } = hero;

                    return(
                        <HeroCard key={ id } name={ name } image={ sm } biography={ biography } />
                    );
                })
            }
        </div>
    );
}