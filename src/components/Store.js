import React from 'react';

// Styles
import styles from "./Store.module.css"

// Comonents
import Products from './Products';
import PaginationBtns from './PaginationBtns';

const Store = () => {
    return (
        <div className={styles.container}>
            <Products />
            <PaginationBtns />
        </div>
    );
};

export default Store;