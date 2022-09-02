import React from 'react';

// Styles
import styles from "./Product.module.css"

const Product = ({product}) => {

    const { id , title , description } = product

    return (
        <div className={styles.container}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
};

export default Product;