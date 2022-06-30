import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet} from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from './components/TodoList/TodoList';
// import { logout } from "./store/slices/authSlice";

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };

  return (

    <Routes>
        <Route path="/login" element={<LoginForm />} /> 
          <Route element={<ProtectedRoute user={currentUser} />}> 
            <Route path="/todos" element={<TodoList />} />
            <Route path="todos/:todoId" element={<TodoItem />} />  
          </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} /> 
    </Routes>
  )
};

export default App;