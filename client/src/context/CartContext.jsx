import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Sync cartItems with localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    // Function to add item to cart
    const addToCart = (product) => {
        let addNewItem = false;
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id && item.option === product.option);
            if (existingItem) {
                return prev.map(item => {
                    if (item.id === product.id && item.option === product.option) {
                        return { ...item, quantity: item.quantity + product.quantity };
                    } else {
                        return item;
                    }
                })
            }
            addNewItem = true;
            return [...prev, { ...product, quantity: product.quantity }];
        })
        toast.success(addNewItem ? "Item added to cart" : "Increased item quantity in cart");
    }

    // Function to update item quantity in cart
    const updateQuantity = (id, option, quantity) => {
        if (quantity < 1) return;

        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.option === option
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Function to remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        toast.success("Item removed from cart");
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}