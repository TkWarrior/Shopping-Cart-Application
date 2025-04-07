
import './App.css'
import  Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Register/Login'
import Cart from './components/Cart/Cart'
import { Cartprovider } from './context/Cartprovider'
import { SearchProvider } from './context/Searchprovider'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <SearchProvider>
      <Cartprovider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </Cartprovider>
    </SearchProvider>
  );
}

export default App
