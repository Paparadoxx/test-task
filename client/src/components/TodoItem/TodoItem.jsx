import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch } from "react-redux";


import styles from './TodoItem.module.css';

import { updateTodo } from "../../store/slices/todoSlice";
import todoService from "../../services/todoService";

const TodoItem = (title, description, created_at) => {
	const {todoId} = useParams();

  const [currentTodo, setCurrentTodo] = useState(null);

  const dispatch = useDispatch();

	const getTodoById = todoId => {
    todoService.getTodo(todoId)
      .then(response => {
        setCurrentTodo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

	useEffect(() => {
		getTodoById(todoId)
	}, [todoId])



  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentTutorial({ ...currentTutorial, [name]: value });
  // };

  // const updateStatus = status => {
  //   const data = {
  //     id: currentTutorial.id,
  //     title: currentTutorial.title,
  //     description: currentTutorial.description,
  //     published: status
  //   };

  //   dispatch(updateTutorial({ id: currentTutorial.id, data }))
  //     .unwrap()
  //     .then(response => {
  //       console.log(response);
  //       setCurrentTutorial({ ...currentTutorial, published: status });
  //       setMessage("The status was updated successfully!");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const updateContent = () => {
  //   dispatch(updateTutorial({ id: currentTutorial.id, data: currentTutorial }))
  //     .unwrap()
  //     .then(response => {
  //       console.log(response);
  //       setMessage("The tutorial was updated successfully!");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

	return (
		<div className={styles.container}>
			

			<p>Время создания: {created_at}</p>
		</div> 
	)
};

export default TodoItem;