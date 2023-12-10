
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SugarPlace from './pages/SugarPlace';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/sugarPlace' element={<SugarPlace />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <hr className='hr' />
      <Footer />
    </>
  )
}


