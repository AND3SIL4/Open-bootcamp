import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task.list';
import ComponenteA from './components/container/componenteA';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Aqui va el componente greeting.jsx */}
        {/* <Greeting name="Andres Felipe Silva"></Greeting> */}
        {/* <GreetingF name={'Felipe'}></GreetingF> */}

        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
