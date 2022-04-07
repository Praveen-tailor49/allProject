import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import HomeMain from './pages/HomeMain';
import { Routes, Route} from "react-router-dom";
import AdminPage from './pages/AdminLoginPage';
import AdminHome from './pages/AdminHome';
function App() {
  return (
    <>
      
      <Routes>
          <Route path='/' element={<HomeMain/>}/>
          <Route path='/adminPage' element={<AdminPage/>}/>
          <Route path='/adminHome' element={<AdminHome/>}/>
      </Routes>
      
    </>
  );
}

export default App;
