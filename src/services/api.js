import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com"

const getProducts = async () => {
    const res = await axios.get('/products')
    const data = res.data

    return data
}

export default getProducts