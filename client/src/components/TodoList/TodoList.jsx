import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../../store/slices/todoSlice";

const TodoList = () => {
	const todos = useSelector(state => state.todos.todo);

	return <>
	<table>
		<thead>
			<tr>
				<th>Задача</th>
				<th>Описание</th>
				<th>Дата создания</th>
				<th>Действие</th>
			</tr>
		</thead>
		<tbody>
			{todos.map(todo => (
				<tr key={todo.id}>
					<td>{todo.title}</td>
					<td>{todo.description}</td>
					<td>{todo.title}</td>
					<td>
						<button onClick={() => removeTodo(todo.id)}>Delete</button>
					</td>
				</tr>
			))}
			</tbody>
	</table>
	</>;
};

export default TodoList;

