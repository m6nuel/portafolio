import './App.css';
import {Contacto} from './components/Contacto'
import { Proyectos } from './components/Proyectos';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';





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
        <div className='cajas' id='tecnologias'>
          <span>Tecnologias usadas</span>
        </div>

        <div className='cajas' id='proyectos'>
          <Proyectos />
        </div>

        <div className='cajas' id='contacto'>
          <Contacto />
        </div>
      </div>
      <div className='footer'>
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
