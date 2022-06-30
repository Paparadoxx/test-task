import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import todoService from "../../services/todoService";
import styles from './TodoList.module.css';
import { removeTodo } from "../../store/slices/todoSlice";

const TodoList = (props) => {
	const dispatch = useDispatch();
	const [content, setContent] = useState("");
	const {user} = useSelector((state) => state.auth);
  const UserId = user.id;

	useEffect(() => {
    todoService.getUserTodos(UserId).then(
      (response) => {
        setContent({todos:response.data.todos});
      },
      (error) => {
				console.log(error.message)
			}
		)
		}, [UserId]);

	return (
		<>
			<Header/>
			<div className={styles.wrapper}>
				<div className={styles.body}>
					{content ? (
					<div>
						{content.todos.map((todo) => (
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


