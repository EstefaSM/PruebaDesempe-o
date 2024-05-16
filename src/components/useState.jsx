//Cambio botón agregar al carrito

import './App.css';
import Products from './components/Products';
import { useState } from 'react';
import imgOne from '../src/img/imgOne.webp';
import imgTwo from '../src/img/imgTwo.jpg';
import imgThree from '../src/img/imgThree.webp';
import imgFour from '../src/img/imgFour.jpg'
import logo from '../src/img/logo.png'

function App() {

  const [stateButtonOne, setStateButtonOne] = useState(true);
  const [stateButtonTwo, setStateButtonTwo] = useState(true);
  const [stateButtonThree, setStateButtonThree] = useState(true);
  const [stateButtonFour, setStateButtonFour] = useState(true);
  
  const state = (buttonId) => {
    if (buttonId === 'buttonOne') {
      setStateButtonOne(!stateButtonOne);
    } else if (buttonId === 'buttonTwo') {
      setStateButtonTwo(!stateButtonTwo);
    } else if (buttonId === 'buttonThree') {
      setStateButtonThree(!stateButtonThree);
    } else if (buttonId === 'buttonFour') {
      setStateButtonFour(!stateButtonFour);
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <div className='productsContainer'>
        <div className='item'>
          <img src={imgOne} alt="Jägermeister" />
          <Products name="Jägermeister" category="Licor de hierbas endulzado" unids='1' price='$118.000'/>          
          <button id='buttonOne' onClick={() => state('buttonOne')}>{stateButtonOne ? "Disponible": "Agregado al carrito" }</button>
        </div>
        <div className='item'>
          <img src={imgTwo} alt="Vino" />
          <Products name="Vino Cabernet Sauvignon Frontera" category="Vino tinto" unids='1' price='$49.900'/>          
          <button id='buttonTwo' onClick={() => state('buttonTwo')}>{stateButtonTwo ? "Disponible": "Agregado al carrito"}</button>
        </div>
        <div className='item'>
          <img src={imgThree} alt='Ron'/>
          <Products name="Ron Bacardi Limón" category="Ron blanco" unids='1' price='$58.600'/>
          <button id='buttonThree' onClick={() => state('buttonThree')}>{stateButtonThree ? "Disponible": "Agregado al carrito"}</button>
        </div>
        <div className='item'>
          <img src={imgFour} alt='Ginebra'/>
          <Products name="Ginebra Bombay Sapphire" category="Infusión" unids='1' price='$154.700'/>
          <button id='buttonFour' onClick={() => state('buttonFour')}>{stateButtonFour ? "Disponible": "Agregado al carrito"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;