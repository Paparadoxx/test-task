import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../store/slices/authSlice";

const LoginForm = (props) => {
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("введите email").email('некорректный email'),
    password: Yup.string().required("введите пароль"),
    });

      const handleLogin = (formValue) => {
        const { email, password } = formValue;
        console.log(email, password);
    
        dispatch(login({ email, password }))
          .unwrap()
          .then(() => {
            props.history.push("/TodoList");
            window.location.reload();
            
          })
          .catch((err) => {
            console.log(err.message)
          });
      };
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleLogin}
         >
          <Form>
            <div className={styles.title}>Todo app</div>
            <div className={styles.form}>
              <label htmlFor="email"/>
              <Field 
                name="email"
                type="text" 
                className={styles.input} 
                placeholder="email"
               />
              <ErrorMessage
                name="email"
                component="div"
              />
            </div>
            <div>
              <Field 
                name="password"
                type="text" 
                className={styles.input} 
                placeholder="password"
               />
               <ErrorMessage
                name="password"
                component="div"
              />
            </div>
            <div>
              <button type="submit" className={styles.btn} >
                <span>Войти</span>
              </button>
            </div>
          </Form>
        </Formik>
        {message && (
          <div className={styles.alert} role="alert">
            {message}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default LoginForm;