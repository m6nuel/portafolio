import './App.css';
import {Contacto} from './components/Contacto/Contacto'
import { Proyectos } from './components/Proyectos/Proyectos.js';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Tecnologias } from './components/Tecnologias/Tecnologias';





function App() {


  return (
    <div className="App">
      <div className='navbar'>
        <NavBar className='navbar'/>
      </div>
      <div className='content'>
        <div className='cajas' id='home'>
          <Home />
        </div>
        <div className='cajas' id='tecnologias' >
          <Tecnologias />
        </div>

        <div className='cajas' id='proyectos' >
          <Proyectos />
        </div>

        <div className='cajas' id='contacto'>
          <Contacto />
        </div>
      </div>
      <div className='footer'>
        <h3>Jesus M. Delgado S. - 2022</h3>
      </div>
    </div>
  );
}

export default App;
