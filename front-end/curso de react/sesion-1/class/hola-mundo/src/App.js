import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task.list';
// import ComponenteA from './components/container/componenteA';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Aqui va el componente greeting.jsx */}
        {/* <Greeting name="Andres Felipe Silva"></Greeting> */}
        {/* <GreetingF name={'Felipe'}></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent>
        <ComponenteA></ComponenteA> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 name='Andres'>
          <h2>Contenido del props.children</h2>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
