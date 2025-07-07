{/* STYLES */}
import styles from './Heroes.module.css';

{/* HOOKS */}
import { useFilterList } from '../../../hooks/useFilterList';

{/* COMPONENTS */}
import { Grid, Navbar, Pagination } from './index';

export const Heroes = () => {
    // Extrae la lista filtrada de heroes
    const { filteredHeroesList } = useFilterList();

    return(
        <div className={ `center ${styles.heroes}` }>
            <Navbar />
            <Grid />
            {
                (filteredHeroesList.length > 0) && <Pagination />
            }
        </div>
    );
}