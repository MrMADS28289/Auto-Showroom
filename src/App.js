import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NavBar from './Components/Shared/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
