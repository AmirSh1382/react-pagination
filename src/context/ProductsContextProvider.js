import React , { useState , useEffect } from 'react';

// API
import getProducts from "../services/api"

export const ProductsContext = React.createContext()

const ProductsContextProvider = ({children}) => {

    const [ products , setProducts ] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts())
        }

        fetchApi()
    } , [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>            
    );
};

export default ProductsContextProvider;