import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [openSidebar,setOpenSidebar] = useState(false);

  const SidebarHandler = () => {
    setOpenSidebar(!openSidebar);
  }
  const Layout = () => {
    return (
      <div>
        <Navbar Click = {SidebarHandler}/>
        <Sidebar openSidebar = {openSidebar} Click = {SidebarHandler}/>
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
      ]
    }
  ])
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
