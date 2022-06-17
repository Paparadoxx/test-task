
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoList from './components/TodoList/TodoList';
import './styles/global.css';

function App() {
  
  return (
    <div className='App'>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
