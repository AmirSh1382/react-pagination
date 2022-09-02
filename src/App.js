import React from 'react';

// Context
import ProductsContextProvider from './context/ProductsContextProvider';
import PaginationContextProvider from './context/PaginationContextProvider';

// Components
import Landing from './Landing';

const App = () => {
    return (
        <ProductsContextProvider>
            <PaginationContextProvider>
                <Landing />
            </PaginationContextProvider>
        </ProductsContextProvider>
    );
};

export default App;