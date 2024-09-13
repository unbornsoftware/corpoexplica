import { useState } from 'react'
import './App.scss'
import {Outlet} from 'react-router-dom';
import Menu from "./layout/Menu.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

function App() {

  return (
    <>
      <Menu />
      <div className="un-body">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
