{/* DEPENDENCIES */}
import { Link } from 'react-router-dom';

{/* STYLES */}
import styles from './Error404.module.css';

export const Error404 = () => {
    return(
        <main className={ `center ${styles.error}` }>
            <h1 className={ styles.error__title }>Error 404</h1>

            <p className={ styles.error__message }>
                Lo sentimos, no se encontró la página solicitada.
            </p>

            <Link className={ styles.error__button } to={ '/login' }>
                Volver al login
            </Link>
        </main>
    );
}