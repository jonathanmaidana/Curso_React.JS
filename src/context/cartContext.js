import React from "react"

const CartContext = React.createContext();
const { Provider } = CartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    const addItem = (item, count) => {
        if(isInCart(item.id)){  
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id) {
                    cartItem.quantity ++
                }
                return cartItem
            })
            setCart(newCart)
        }
        else{
            setCart ([...cart, {...item, quantity: count}])
        }
    }

    console.log(cart)

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const deleteAll = () => {
        setCart ([])
    }


    const isInCart = (id) =>{
        return cart.find(item => item.id === id)
    }

    return (
        <Provider value={{
        addItem,
        removeItem,
        deleteAll,
        isInCart,
        cart,
        }}>{children}</Provider>
    )
}

export {CartContext, CartProvider}