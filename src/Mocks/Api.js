import axios from 'axios'

export const traerProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(axios.get("https://api.mercadolibre.com/sites/MLA/search?q=remeras_urbanas_hombre&limit=10"))
    }, 3000)
})