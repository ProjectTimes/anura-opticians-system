import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './routes/Routes';
import { 
  AdminDasboard, 
  AdminLoginPage 
} from './routes/AdminRoutes';



const App = () => {
  return (
 
     <BrowserRouter>
      <Routes>
        {/* cashier */}
        <Route path='/login' element={<LoginPage/>} />

        {/* Admin */}
        <Route path='/admin-login' element={<AdminLoginPage/>} />
        <Route path='/admin-dash' element={<AdminDasboard/>} />
 
        
      </Routes>
    </BrowserRouter>
 
   
  )
}

export default App

