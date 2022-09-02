import React, { useContext } from 'react';

// Context
import { PaginationContext } from "../context/PaginationContextProvider"

// Styles
import styles from "./Pagination.module.css"

const PaginationBtns = () => {

    const { pagination , dispatch } = useContext(PaginationContext)

    const currentPage = pagination.currentPage

    const pagesCount = pagination.pagesCount

    const btns = pagination.paginationBtns

    const clickHandler = (info) => {
        dispatch(info)

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const prevBtnDisabled = currentPage > 1 ? false : true
    const nextBtnDisabled = currentPage < pagesCount ? false : true

    if(btns.length) {
        return (
            <div className={styles.pagination}>
    
                <button className={currentPage === 1 ? styles.disabled : ""} onClick={() => clickHandler({type: "PREV_PAGE"})} disabled={prevBtnDisabled}>prev</button>
                <div className={styles.numberBtns}>
                    {
                        btns.map(btn => <button className={btn === currentPage ? styles.active : ""} key={btn} onClick={() => clickHandler({type: "CHANGE_PAGE", payload: {page: btn}})}>{btn}</button>)
                    }
                </div>
                <button className={currentPage === pagesCount ? styles.disabled : ""} onClick={() => clickHandler({type: "NEXT_PAGE"})} disabled={nextBtnDisabled}>next</button>
            </div>
        );
    }
};

export default PaginationBtns;