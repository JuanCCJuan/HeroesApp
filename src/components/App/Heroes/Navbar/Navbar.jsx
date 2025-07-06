{/* STYLES */}
import styles from './Navbar.module.css';

{/* COMPONENTS */}
import { SearchBar } from './SearchBar/SearchBar';

export const Navbar = () => {
    return(
        <nav className={ `center ${styles.navbar}` }>
            <div className={ `center ${styles.navbar__logo}` }>
                <span className={ `${styles.logo__text} ${styles['logo__text--back']}` }>App</span>
                <span className={ `${styles.logo__text} ${styles['logo__text--front']}` }>Heroes</span>
            </div>

            <SearchBar />
        </nav>
    );
}