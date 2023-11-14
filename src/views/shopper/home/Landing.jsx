'use client';
import classes from './Landing.module.css';
import React, { useState } from 'react';
function Landing() {
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const HandleAddToCart = product => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setDisplayCart(!displayCart);
  }

  const handleClearCart = () => {
    setCart([]);
  };
  const closeCart = () => {
    setDisplayCart(false);
  };

  const TaglineSection = () => {
    return (
      <section className={classes.taglineSection}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* <Carousel /> */}
      </section>
    );
  };
  return (
    <>
      <div className={classes.home}>
        <div className={classes.landingSection}>
          <h1>PAGE TAGLINE</h1>
          <TaglineSection />
        </div>
      </div>
    </>
  );
}
export default Landing;
