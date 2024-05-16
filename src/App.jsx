//Impresión por consola, ejemplo de useEffect

import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/Products';
import logo from '../src/img/logo.png';
import imgOne from '../src/img/imgOne.webp';
import imgTwo from '../src/img/imgTwo.jpg';
import imgThree from '../src/img/imgThree.webp';
import imgFour from '../src/img/imgFour.jpg';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulate, item) => accumulate + item.price, 0);
    console.log("Total de la compra:", totalPrice);
  }, [cartItems]); 

  const AddedToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <div className='productsContainer'>
        <div className='item'>
          <img src={imgOne} alt="Jägermeister" />
          <Products name="Jägermeister" category="Licor de hierbas endulzado" unids='1' price={118000}/>          
          <button onClick={() => AddedToCart({ name: "Jägermeister", price: 118000 })}>Agregar al carrito</button>
        </div>
        <div className='item'>
          <img src={imgTwo} alt="Vino" />
          <Products name="Vino Cabernet Sauvignon Frontera" category="Vino tinto" unids='1' price={49900}/>          
          <button onClick={() => AddedToCart({ name: "Vino Cabernet Sauvignon Frontera", price: 49900 })}>Agregar al carrito</button>
        </div>
        <div className='item'>
          <img src={imgThree} alt='Ron'/>
          <Products name="Ron Bacardi Limón" category="Ron blanco" unids='1' price={58600}/>
          <button onClick={() => AddedToCart({ name: "Ron Bacardi Limón", price: 58600 })}>Agregar al carrito</button>
        </div>
        <div className='item'>
          <img src={imgFour} alt='Ginebra'/>
          <Products name="Ginebra Bombay Sapphire" category="Infusión" unids='1' price={154700}/>
          <button onClick={() => AddedToCart({ name: "Ginebra Bombay Sapphire", price: 154700 })}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default App;