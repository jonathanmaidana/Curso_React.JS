import React from "react"

const CartContext = React.createContext();
const { Provider } = CartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    /* ------------------------ Agregar items al carrito ------------------------ */
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

    /* ------------------------ Aumentar cantidad de items por unidad ------------------------ */
    const addQuantity = (id) =>{
        const addQnty = cart.map(cartItem => {
            if(cartItem.id === id) {
                cartItem.quantity === cartItem.stock ? (alert(`Maximo de stock disponible`)) : cartItem.quantity ++
            }
            return cartItem
        })
        setCart(addQnty)
    }

    /* ------------------ Remover cantidad de items por unidad ------------------ */
    const removeQuantity = (id) => {
        if(isInCart(id)){ 
            cart.map(cartItem => {
                if(cartItem.id === id) {
                    if(cartItem.quantity > 1) {
                        const removeQnty = cart.map((cartItem) => {
                            if (cartItem.id === id) {
                                cartItem.quantity -- ;
                            }
                            return cartItem;
                            });
                            setCart(removeQnty);
                    }
                    else{
                        const newCart = cart.filter((carItem) => carItem.id !== id);
                        setCart(newCart)
                    }
                }
                return cartItem
            })
        }
    }

    /* ------------------------ Remover item del carrito ------------------------ */
    const removeItem = (id) =>{
        const newCart = cart.filter((carItem) => carItem.id !== id);
        setCart(newCart)
    }


    /* ----------------------------- Vaciar Carrito ----------------------------- */
    const deleteAll = () => {
        setCart ([])
    }


    const isInCart = (id) =>{
        return cart.find(item => item.id === id)
    }

    
    /* ----------------- Funcion para saber el total del carrito ---------------- */
    const getTotalCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)	
    }
    
    
    return (
        <Provider value={{
        addItem,
        removeItem,
        deleteAll,
        isInCart,
        getTotalCart,
        addQuantity,
        removeQuantity,
        cart,
        }}>{children}</Provider>
    )
}

export {CartContext, CartProvider}