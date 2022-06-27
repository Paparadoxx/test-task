
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet} from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
// import TodoItem from "./components/TodoItem/TodoItem";
// import TodoList from './components/TodoList/TodoList';

// import { logout } from "./store/slices/authSlice";

function App() {
  // const { user: currentUser } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  // const logOut = useCallback(() => {
  //   dispatch(logout());
  // }, [dispatch]);

  // const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
  //   if (!user) {
  //     return <Navigate to={redirectPath} replace />;
  //   }
  //   return <Outlet />;
  // };

  return (

    <Routes>
        <Route path="/" element={<NewTodoForm />} /> 
        {/* <Route element={<ProtectedRoute user={currentUser} />}> 
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/todoItem:TodoId" element={<TodoItem />} /> 
        </Route>    */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} /> 
    </Routes>
  )
};

export default App;