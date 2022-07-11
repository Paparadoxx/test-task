import React, {useEffect, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import styles from './TodoList.module.css';
import { removeTodo, getTodos } from "../../store/slices/todoSlice";

const TodoList = () => {
	
	const dispatch = useDispatch();
	const {user} = useSelector((state) => state.auth);
  const userId = user.id;

	const todos = useSelector(state => state.todos.todos);

	const initFetch = useCallback(() => {
    dispatch(getTodos(userId))
  }, [userId, dispatch]);

  useEffect(() => {
    initFetch()
  }, [initFetch])

	
	return (
		<>
			<Header/>
			<div className={styles.wrapper}>
				<div className={styles.body}>
					{todos ? (
					<div>
						{todos?.map((todo) => (
							<div key={todo.todoId}>
								<div className={styles.container}>
								<Link to={`${todo.todoId}`}>
									<h3 className={styles.title}>{todo.title}</h3>
								</Link>
										{todo.description && <p className={styles.description}>{todo.description}</p>}
										<p>Время создания: {todo.createdAt ? todo.createdAt : todo.updatedAt}</p>
										<button
											className={styles.deleteBtn}
											onClick={() => dispatch(removeTodo({todoId:todo.todoId}))}
										>Удалить 
										</button>
									</div> 
							</div>
						))}

					</div>
					) : (<div className={styles.container}>Нет активных задач</div>)}
				</div>
				<NewTodoForm/>
			</div>
		</>
	)
};

export default TodoList;


