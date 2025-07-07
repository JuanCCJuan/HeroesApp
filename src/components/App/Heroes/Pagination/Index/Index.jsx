{/* STYLES */}
import styles from './Index.module.css';

{/* HOOKS */}
import { usePagination } from '../../../../../hooks/usePagination';

{/* DEPENDENCIES */}
import PropTypes from 'prop-types';

export const Index = ({ base, index, isSelected }) => {
    // Extrae el dispatch de la paginacion
    const { dispatch } = usePagination();

    // Tranforma la base y el indice como string
    const pageIndexAsAString = `${base + index}${index}`;

    // Tranforma la cadena anterior a un numero
    const pageIndexAsANumber = parseInt(pageIndexAsAString);

    return(
        <li 
            onClick={ () => dispatch({ type: 'SELECT', payload: pageIndexAsANumber }) } 
            className={ `center ${styles.index} ${isSelected ? styles['index--selected'] : ''}`.trim() } 
        >
            { base + index }
        </li>
    );
}

// Asigna tipo a la propiedad del componente
Index.propTypes = {
    number: PropTypes.number.isRequired, 
};