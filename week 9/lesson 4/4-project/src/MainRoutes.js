import React from "react"; 
import { Route, Routes } from "react-router-dom"; 
import AboutPage from "./components/AboutPage";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import UserDetail from "./components/UserDetail";
 
const MainRoutes = () => { 
  return ( 
    <Routes> 
      <Route path="/" element={<Layout />} >
       <Route path="about" element={<AboutPage />} />
       <Route index element={<HomePage/>} />
       <Route path="users" element={<UsersPage/>} />
       <Route path="users/:id" element={<UserDetail/>} />
      </ Route >
    </Routes> 
  ); 
}; 
 
export default MainRoutes;