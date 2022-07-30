import logo from './logo.svg';
import './App.css';
/* import ComponenteA from './components/ejercicio_123/ComponenteA'; */
import Clock from './components/ejercicio456/Clock';
import ClockFunction from './components/ejercicio456/ClockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Ejercicio secciones 1,2,3 */}
        {/*  <ComponenteA /> */}

        {/* Ejercicio secciones 4,5,6*/}
        <Clock/>
        <ClockFunction/>
      </header>
    </div>
  );
}

export default App;
