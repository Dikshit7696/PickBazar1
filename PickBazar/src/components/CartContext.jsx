import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const updateCartQuantity = (item, quantity) => {
        setCart((prevCart) => {
            if (quantity <= 0) {
                return prevCart.filter((cartItem) => cartItem.id !== item.id);
            }
            return prevCart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
            );
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};