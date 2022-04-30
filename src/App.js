import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Regester from './Components/Regester/Regester';
import Footer from './Components/Shared/Footer/Footer';
import NavBar from './Components/Shared/NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/regester' element={<Regester />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
