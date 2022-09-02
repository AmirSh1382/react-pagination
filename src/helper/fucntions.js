const setPaginationConfigs = (state, products) => {

    // to set the first page of pagination
    const endIndex = state.currentPage * state.itemsPerPage

    const paginatedProducts = products.slice(0, endIndex)

    // to set pages count
    const pagesCount = Math.ceil(products.length / state.itemsPerPage)
    
    // to set pagination btns
    const paginationBtns = []

    for(let i = 1 ; i <= pagesCount ; i++){
        paginationBtns.push(i)
    }

    return {products, paginatedProducts, paginationBtns , pagesCount}
}

const setNewPageProducts = (state , currentPage) => {

    const products = state.products

    const startIndex = (currentPage * state.itemsPerPage) - state.itemsPerPage
    const endIndex = currentPage * state.itemsPerPage

    const paginatedProducts = products.slice(startIndex , endIndex)

    return {paginatedProducts}
}

export { setPaginationConfigs , setNewPageProducts }