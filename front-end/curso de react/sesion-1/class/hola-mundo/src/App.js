import './App.css';
import TaskListComponent from './components/container/task.list';
import GreetingStyled from './components/pure/greetingStyled';



function App() {
  return (
    <div className="App">
        <TaskListComponent></TaskListComponent>
        <GreetingStyled name='Andres'></GreetingStyled>
    </div>
  );
}

export default App;
