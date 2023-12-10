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
import DefaultSidebar from './Components/DefaultSidebar/DefaultSidebar';

function App() {
  const [openSidebar,setOpenSidebar] = useState(false);

  const SidebarHandler = () => {
    setOpenSidebar(!openSidebar);
  }
  const Layout = () => {
    return (
      <div className='App-container'>
        <Navbar Click = {SidebarHandler}/>
        <div className='main-container'>
          <div className='main-sidebars'>
            <Sidebar openSidebar = {openSidebar} />
            <DefaultSidebar openSidebar = {!openSidebar}/>
          </div>
          <Outlet/>
        </div>
        
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
