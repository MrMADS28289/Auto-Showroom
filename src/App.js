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
import ManageInventory from './Components/ManageInventory/ManageInventory';
import InventoryItems from './Components/ManageInventory/InventoryItems/InventoryItems';
import MyInventory from './Components/ManageInventory/MyInventory/MyInventory';
import AddItems from './Components/ManageInventory/AddItems/AddItems';
import UpdateCar from './Components/ManageInventory/InventoryItems/UpdateCar/UpdateCar';
import ManageCar from './Components/Inventory/ManageCar/ManageCar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }>
        </Route>
        <Route path='/inventory/:inventoryId' element={<ManageCar />} />
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } >
          <Route path='mangeItems' element={<InventoryItems />} />
          <Route path='myinventory' element={<MyInventory />} />
          <Route path='addItem' element={<AddItems />} />
        </Route>
        <Route path='/manageInventory/:id' element={<UpdateCar />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/regester' element={<Regester />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
