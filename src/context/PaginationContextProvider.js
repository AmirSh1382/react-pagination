import React , { useContext, useEffect, useReducer } from 'react';

// Context
import { ProductsContext } from './ProductsContextProvider';

// Functions
import { setPaginationConfigs , setNewPageProducts } from '../helper/fucntions';

const initialValue = {
    products: [],
    paginatedProducts: [],
    paginationBtns: [],
    currentPage: 1,
    itemsPerPage: 6,
    pagesCount: 0
}

const paginationReducer = (state , action) => {
    switch(action.type){
        case "SET_CONFIGS":
            return{
                ...state,
                ...setPaginationConfigs(state, action.payload.products)
            }

        case "NEXT_PAGE":
            if(state.currentPage < state.pagesCount){
                state.currentPage++;
            }
            return{
                ...state,
                ...setNewPageProducts(state , state.currentPage)
            }
        case "PREV_PAGE":
            if(state.currentPage > 1){
                state.currentPage--
            }
            return{
                ...state,
                ...setNewPageProducts(state , state.currentPage)
            }

        case "CHANGE_PAGE":
            return{
                ...state,
                ...setNewPageProducts(state , action.payload.page)
            }

        default :
            return state
    }
}

export const PaginationContext = React.createContext()

const PaginationContextProvider = ({children}) => {

    const [ pagination , dispatch ] = useReducer(paginationReducer , initialValue)

    const products = useContext(ProductsContext)

    useEffect(() => {
        dispatch({type: "SET_CONFIGS" , payload: {products}})
    } , [products])

    return (
        <PaginationContext.Provider value={{pagination, dispatch}}>
            {children}
        </PaginationContext.Provider>            
    );
};

export default PaginationContextProvider;