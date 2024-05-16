// import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useState } from 'react';
import imgOne from '../src/img/imgOne.webp';
import imgTwo from '../src/img/imgTwo.jpg';
import imgThree from '../src/img/imgThree.webp';
import imgFour from '../src/img/imgFour.jpg'

function App() {

  const [stateProducts, setStateProducts] =useState(true);
  
  const state = () => {
      var estado = document.getElementById("buttonOne")
    setStateProducts(!stateProducts);
    if(stateProducts){
      estado.style.color="red";
    }else{
      estado.style.color="green";
    }
  }

  return (
    <div className="App">
      <div className='productsContainer'>
        <div className='item'>
          <img src={imgOne} alt="Jägermeister" />
          <Products name="Jägermeister" category="Licor de hierbas endulzado" unids='1' price='$118.000'/>          
          <button id='buttonOne' onClick={state}>{stateProducts ? "Disponible": "Agregado al carrito"}</button>
        </div>
        <div className='item'>
          <img src={imgTwo} alt="Vino" />
          <Products name="Vino Cabernet Sauvignon Frontera" category="Vino tinto" unids='1' price='$49.900'/>          
          <button id='estado' onClick={state}>{stateProducts ? "Disponible": "Agregado al carrito"}</button>
        </div>
        <div className='item'>
          <img src={imgThree} alt='Ron'/>
          <Products name="Ron Bacardi Limón" category="Ron blanco con sabor a cítrico" unids='1' price='$58.600'/>
          <button id='buttonOne' onClick={state}>{stateProducts ? "Disponible": "Agregado al carrito"}</button>
        </div>
        <div className='item'>
          <img src={imgFour} alt='Ginebra'/>
          <Products name="Ginebra Bombay Sapphire" category="Infusión de Vapor" unids='1' price='$154.700'/>
          <button id='buttonOne' onClick={state}>{stateProducts ? "Disponible": "Agregado al carrito"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
