import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

 const useCart = () => {
  return useContext(CartContext);
};

 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = itemId => {
    const updatedCart = cart?.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

   const handleQuantityChange = (itemId, value) => {
     setCart(prevItems =>
       prevItems?.map(item =>
         item.id === itemId ? { ...item, quantity: parseInt(value) } : item,
       ),
     );
   };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, useCart }; // Export CartContext here
