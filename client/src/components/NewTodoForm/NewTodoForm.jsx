import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addTodo } from "../../store/slices/todoSlice";
import styles from './NewTodoForm.module.css';

import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewTodoForm = () => {
	const dispatch = useDispatch();

  const initialValues = {
    title: "",
    description: "",
    userId: "",
    todoId: "",
  };  
  const { user: currentUser } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("введите заголовок задания")
    });

  const handleAddTodo = (formValue) => {
    const {title, description} = formValue;
    const userId = currentUser.id;
    const todoId = uuidv4();

    dispatch(addTodo({title, description, userId, todoId}))
    .unwrap()
    .catch((err) => {
      return err.message
    });
  };

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddTodo}
        >
          <Form className={styles.form}>
            <h4 className={styles.title} >Добавить задание</h4>
            <Field 
              name="title"
              type="text" 
              className={styles.input} 
              placeholder="заголовок задания"
            />
            <ErrorMessage
              className={styles.alert}
              name="title"
              component="div"
            />
            <Field 
              name="description"
              as="textarea"
              className={styles.textarea} 
              placeholder="описание задания"
            />
          <button 
            className={styles.btn} 
            type="submit"
          >
            Добавить
          </button>
          </Form>
        </Formik>
      </div>    
    </div>
    </>
    );
};

export default NewTodoForm;