{/* STYLES */}
import styles from './ErrorMessage.module.css';

{/* DEPENDENCIES */}
import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => {
    return(
        <main className={ `center ${styles.error}` }>
            <h1 className={ styles.error__title }>Error</h1>
            <p className={ styles.error__message }>{ message }</p>
        </main>
    );
}

// Asigna tipos a las propiedades del componente
ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired, 
};