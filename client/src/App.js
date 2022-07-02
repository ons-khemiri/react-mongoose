import React from 'react';
import './App.css';
import{Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<User/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/*" element={<Error/>}/>
      </Routes>    
      <Footer/>
    </div>
  );
}

export default App;
