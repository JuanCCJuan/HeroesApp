{/* DEPENDENCIES */}
import { Routes, Route } from 'react-router-dom';

{/* COMPONENTS */}
import { Heroes, Error404 } from '../components/App';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/*' element={ <Error404 /> } />
            <Route path='/HeroesApp/heroes' element={ <Heroes /> } />
        </Routes>
    );
}