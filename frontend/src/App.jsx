import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Register/Login'
import Cart from './components/Cart/Cart'
import { Cartprovider } from './context/Cartprovider'

function App() {
  return (
    <Cartprovider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </Cartprovider>
  );
}

export default App
