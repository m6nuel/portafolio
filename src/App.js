import './App.css';
import {Contacto} from './components/Contacto'
import { Proyectos } from './components/Proyectos';
import { Home } from './components/Home';





function App() {


  return (
    <div className="App">
      <div className='navbar'>
        <h2>navbar</h2>
      </div>
      <div className='content'>
        <div className='cajas'>
          <Home />
        </div>
        <div className='cajas'>
          <span>Tecnologias usadas</span>
        </div>

        <div className='cajas'>
          <Proyectos />
        </div>

        <div className='cajas'>
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
