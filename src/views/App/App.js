import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from '../components/Header/Header';
import Task from '../pages/task/Task'

function App() {
  return (
    <div className="App container-md">
      <Header></Header>
      <Task></Task>
    </div>
  );
}

export default App;
