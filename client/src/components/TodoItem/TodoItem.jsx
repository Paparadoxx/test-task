import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/slices/todoSlice";
import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ( todoId, title, description) => {
	const dispatch = useDispatch();
	return (
			<div className={styles.container}>
				<h3 className={styles.title}>{title}</h3>
				{description && <p className={styles.description}>{description}</p>}
				<p>Время создания: </p>
				<button
						className={styles.deleteBtn}
						onClick={() => dispatch(removeTodo({todoId}))}
				>Удалить
				</button>
			</div>
	)
};

export default TodoItem;