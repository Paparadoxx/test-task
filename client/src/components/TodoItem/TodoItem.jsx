import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import styles from './TodoItem.module.css';

import { getTodo, updateTodo } from "../../store/slices/todoSlice";
import Header from '../Header/Header';

const TodoItem = (props) => {
	const {todoId} = useParams();
  const [updated, setUpdated] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const userId = user.id;

  const initialTodoState = {
    userId: '',
    todoId: '',
    title: '',
    description: '',
    created_at: '',
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);

  const getTodoById = todoId => {
    dispatch(getTodo(todoId))
    .then(response => {
      setCurrentTodo(response.payload.todos);
      })
      .catch(error => {
        console.log(error);
    });
  }
	useEffect(() => {
		getTodoById(todoId)
	}, [todoId]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const data = {
      title: currentTodo.title,
      description: currentTodo.description,
      todoId, 
      userId,
    };
    dispatch(updateTodo({todoId, data}))
    .unwrap()
    .then(setUpdated(true))
    .catch((err) => {
      return err.message
    });
  };
  
  return (
  <>
    <Header/>
    <div className={styles.wrapper}>
      {updated && (
        <Navigate to="/todos" replace={true}/>)}
        <form className={styles.form}>
        <h3 className={styles.title} >Обновить задание</h3>
          <div className={styles.card}>
            <h4 className={styles.titleh4} >заголовок задания</h4>
            <input
              type="text"
              className={styles.input} 
              name="title"
              value={currentTodo?.title}
              onChange={handleInputChange}
              placeholder="заголовок задания"
              />
          </div>
          {!currentTodo?.title && <div className={styles.alert} >
            <span>введите заголовок задания</span>
          </div>}
          <div className={styles.card}>
          <h4 className={styles.titleh4} >описание задания</h4>
            <textarea
              type="text"
              className={styles.textarea} 
              name="description"
              value={currentTodo?.description}
              onChange={handleInputChange}
              placeholder="описание задания"
            />
          </div>
          <div className="form-group">
            Дата создания: {currentTodo?.createdAt}
          </div>
          <button
            type="submit"
            className={styles.btn} 
            onClick={handleUpdateTodo}
            disabled={!currentTodo.title}
          >
          Обновить
        </button>
        </form>
    </div>
  </>  
  );
};

export default TodoItem;