import './App.css'
import Footer from './components/user/footer/Footer';
import Navbar from './components/user/navbar/Navbar';
import Home from './pages/user/Home'
import { Routes , Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App
