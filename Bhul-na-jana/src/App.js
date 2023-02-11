import React from 'react';
import Layout from './components/Layout';
import Login from "./components/LoginForm"
import 'antd/dist/reset.css';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {

  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser
  })
return (
  <>
  {loggedInUser ? (
  <Layout/>
  ): (
    <Login/>
  )}
  </>
);
}
  

export default App;