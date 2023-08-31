import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Compoent/Home/Home';
import Login from './Compoent/Login/Login';
import Header from './Compoent/Header/Header';
import { createContext, useState } from 'react';
export const contextprovider=createContext();

function App() {
  const [isloggin,setloggin]=useState({});
  return (
    
   <contextprovider.Provider value={[isloggin,setloggin]}>
   <p>name:{isloggin.name}</p>
   <p>eamil:{isloggin.email}</p>
    <div className="App">
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
     
    </div>
    </contextprovider.Provider>
  );
}

export default App;
