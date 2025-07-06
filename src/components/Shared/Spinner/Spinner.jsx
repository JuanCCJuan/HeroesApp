{/* STYLES */}
import styles from './Spinner.module.css';

export const Spinner = () => {
    return(
        <div className={ `center ${styles.spinner}` }>
            <h1 className={ styles.spinner__title }>Cargando heroes...</h1>
            <span className={ styles.spinner__circle }></span>
        </div>
    );
}