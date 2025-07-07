{/* STYLES */}
import styles from './Pagination.module.css';

{/* HOOKS */}
import { usePagination } from '../../../../hooks/usePagination';

{/* ICONS */}
import { 
    MdOutlineKeyboardArrowLeft, 
    MdOutlineKeyboardArrowRight, 
    MdOutlineKeyboardDoubleArrowLeft, 
    MdOutlineKeyboardDoubleArrowRight   
} from 'react-icons/md';

{/* COMPONENTS */}
import { Index } from './Index/Index';

const LIMIT = 60;

export const Pagination = () => {
    // Desestructura el custom hook
    const { base, selected, dispatch, totalBoxes, totalPages } = usePagination();

    return(
        <div className={ `center ${styles.pagination}` }>
            {
                (totalPages > 5) && 
                <MdOutlineKeyboardDoubleArrowLeft 
                    className={ styles.arrow } 
                    onClick={() => dispatch({ type: 'START', payload: totalPages })} 
                />
            }

            {
                (totalPages > 5) && 
                <MdOutlineKeyboardArrowLeft 
                    className={ styles.arrow } 
                    onClick={() => dispatch({ type: 'PREVIOUS', payload: totalPages })} 
                />
            }

            <ol className={ `center ${styles.pagination__list}` }>
                {
                    Array.from({ length: totalBoxes }).map((_, index) => {
                        const isSelected = (selected === index);

                        return(
                            <Index 
                                key={ index } 
                                base={ base } 
                                index={ index } 
                                isSelected={ isSelected } 
                            />
                        );
                    })
                }
            </ol>

            {
                (totalPages > 5) && 
                <MdOutlineKeyboardArrowRight 
                    className={ styles.arrow } 
                    onClick={() => dispatch({ type: 'NEXT', payload: totalPages })} 
                />

            }

            {
                (totalPages > 5) && 
                <MdOutlineKeyboardDoubleArrowRight 
                    className={ styles.arrow } 
                    onClick={() => dispatch({ type: 'END', payload: totalPages })} 
                />
            }
        </div>
    );
}