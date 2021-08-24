import './App.css';
import Todoform from './MyComponents/Todoform';
import TodoList from './MyComponents/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <h1>ToDo App</h1>
    </div>
  );
}

export default App;
