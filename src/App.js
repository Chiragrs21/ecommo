import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='ecommo/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
