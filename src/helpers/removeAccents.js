/* Remueve acentos de una cadena */
export const removeAccents = string => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}