import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Compoent/Home/Home';
import Login from './Compoent/Login/Login';
import Header from './Compoent/Header/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
