import React, {useState} from 'react';
import Header from '../views/shopper/header/Header';
const Layout = ({ children }) => {
    const [cart, setCart] = useState([]);

    const onAddToCart = product => {
      setCart(prevCart => [...prevCart, product]);
    };
  return (
    <div>
      <Header cart={cart} setCart={setCart} />
      {children}
    </div>
  );
};

export default Layout
