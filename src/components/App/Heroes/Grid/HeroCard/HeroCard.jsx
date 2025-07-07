{/* STYLES */}
import styles from './HeroCard.module.css';

{/* DEPENDENCIES */}
import PropTypes from 'prop-types';

export const HeroCard = ({ name, image, biography }) => {
    // Extrae el nombre completo, lugar de nacimiento y publicadora del heroe
    const { fullName, placeOfBirth, publisher } = biography;

    return(
        <div className={ `center ${styles.card}` }>
            <img className={ `image ${styles.card__image}` } src={ image } alt={ name } loading='lazy' />

            <div className={ `center ${styles.card__info}` }>
                <div className={ `center ${styles.info__data}` }>
                    <h2 className={ `line-clamp-1 ${styles.data__name}` }>
                        { name }
                    </h2>

                    {
                        [fullName, placeOfBirth, publisher].map((data, index) => (
                            <p key={ index } className={ `line-clamp-1 ${styles.data__paragraph}` }>
                                { data ? data : '-' }
                            </p>
                        ))
                    }

                    <p className={ styles.data__link }>Ver mas...</p>
                </div>
            </div>
        </div>
    );
}

// Asigna tipos a las props del componente
HeroCard.propTypes = {
    name: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    biography: PropTypes.object.isRequired, 
};