{/* STYLES */}
import styles from './SearchBar.module.css';

{/* HOOKS */}
import { useRef, useContext } from 'react';

{/* CONTEXTS */}
import { AppContext } from '../../../../../contexts/AppContext';

{/* HELPERS */}
import { removeAccents } from '../../../../../helpers/removeAccents';

{/* ICONS */}
import { VscSearch } from 'react-icons/vsc';

export const SearchBar = () => {
    // Crea una referencia para el formulario y otra para el input
    const formRef = useRef(null);
    const inputRef = useRef(null);

    // Extrae la funcion para modificar el nombre del heroe
    const { setHeroName } = useContext(AppContext);

    // Maneja el cambio de nombre cuando se da enter o click en el icono de busqueda
    const handleSubmit = event => {
        // Previene comportamientos por defecto y la propagacion
        event.preventDefault();
        event.stopPropagation();

        // Extraemos el valor del input
        const inputValue = removeAccents(inputRef.current.value.trim().toLowerCase());

        // Se desenfoca el input
        inputRef.current.blur();

        // Actualizamos el nombre del heroe
        setHeroName(inputValue);
    }

    return(
        <form 
            ref={ formRef } 
            onSubmit={ handleSubmit } 
            onClick={ () => inputRef.current.focus() } 
            className={ `center ${styles.searchbar}` } 
        >
            <input 
                type='text' 
                ref={ inputRef } 
                autoComplete='off' 
                placeholder='Buscar héroe' 
                className={ styles.searchbar__input } 
            />
            <VscSearch className={ styles.searchbar__icon } onClick={ handleSubmit } />
        </form>
    );
}