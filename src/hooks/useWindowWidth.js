/* HOOKS */
import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
    // Crea un estado para almacenar el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Crea una funcion que manipula el ancho de la ventana
        const adjustWidth = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        }

        // Se ejecuta la funcion cuando cambia el ancho de la ventana
        window.addEventListener('resize', adjustWidth);

        // Limpia el efecto
        return () => {
            window.removeEventListener('resize', adjustWidth);
        }
    }, [windowWidth]);

    return {
        windowWidth, 
    }
}