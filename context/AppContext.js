import React, { createContext, useState } from 'react';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);

    const addToFavorites = (product) => {
        if (!favorites.some(item => item.id === product.id)) {
            setFavorites([...favorites, product]);
        }
    };

    const removeFromFavorites = (productId) => {
        setFavorites(favorites.filter(item => item.id !== productId));
    };

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <AppContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            cart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    );
};
