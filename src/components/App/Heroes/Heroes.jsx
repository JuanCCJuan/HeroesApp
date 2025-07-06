{/* STYLES */}
import styles from './Heroes.module.css';

{/* COMPONENTS */}
import { Grid, Navbar } from './index';

export const Heroes = () => {
    return(
        <div className={ `center ${styles.heroes}` }>
            <Navbar />
            <Grid />
        </div>
    );
}