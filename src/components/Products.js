import React , { useContext } from 'react';

// Componetns
import Product from './Product';

// Context
import { PaginationContext } from "../context/PaginationContextProvider"

// Styles
import styles from "./Products.module.css"

const Products = () => {

    const { pagination } = useContext(PaginationContext)

    const products = pagination.paginatedProducts

    if(products.length){
        return (
            <div className={styles.container}>
                {
                    products.map(item => <Product key={item.id} product={item} />)
                }
            </div>
        );
    }else{
        return (
            <div className={styles.loading}>
                Loading...
            </div>
        )
    }
};

export default Products;