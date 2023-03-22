import TopNav from './TopNav';
import './App.css';
import Navbar from './Navbar'
import {Routes,Route} from "react-router-dom"
import Product from './components/Product'
import Products from './components/Products'
import LoginPage from './Login/login';
import PaymentPage from './PaymentPage'
import Cart from './components/Cart'
 import Banner from './Banner/Banner'
 import Footer from './Footer'
// import {Routes , Route , Switch }  from 'react-router-dom'
import RegisterPage from './register/register';
function App() {
  return (
   <div>
    <TopNav/>
    
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      
      <Route  exact path="/product" element={<Products/>} />
      <Route  exact path="/product/:id" element={<Product/>} />
      <Route exact path='/login' element={<LoginPage/>}/>
    <Route exact path='/register' element={<RegisterPage/>}/>
    <Route   path='/PaymentPage' element={<PaymentPage/>}/>
      <Route path="/cart" element={<Cart/>}/> 
    </Routes>
    <Banner/>
    <Footer/>
   </div>
    
  );
}

export default App;
