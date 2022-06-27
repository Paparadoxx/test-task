import React from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../../store/slices/todoSlice";
import styles from './NewTodoForm.module.css';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewTodoForm = () => {
	const dispatch = useDispatch();

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("введите заголовок задания")
    });

  const handleAddTodo = (formValue) => {
    const {title, description} = formValue;

    dispatch(addTodo({title, description}))
    .unwrap()
    .catch((err) => {
      return err.message
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddTodo}
        >
          <Form>
            <h4>Добавить задание</h4>
            <Field 
              name="title"
              type="text" 
              className={styles.input} 
              placeholder="заголовок задания"
            />
            <ErrorMessage
              name="title"
              component="div"
            />
            <Field 
              name="description"
              type="text" 
              className={styles.input} 
              placeholder="описание задания"
            />
          <button 
            type="submit"
            onClick={() => dispatch(addTodo)}
          >
            Добавить
          </button>
          </Form>
        </Formik>
      </div>    
    </div>
    );
};

export default NewTodoForm;