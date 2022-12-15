import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Detail from './Pages/detail/Detail';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';

function App() {
  return (
    <div className='container-main'>
      <div className='nav'><Navbar/></div>

        <Routes>
          <Route path='/' element={<Page1/>} exact />
          <Route path='/products' element={<Page2/>} exact />
          <Route path='/detail:id' element={<Detail/>} exact />
        </Routes>

      <div className='foot'><Footer/></div>
    </div>
  );
}

export default App;
