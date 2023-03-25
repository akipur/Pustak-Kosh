import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Donor from './components/donor/Donor';
import Login from './components/Login';
import SignUp from './components/Signup';
import Needy from './components/Needy';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Donor" element={<Donor/>}/>
        <Route path="/needy" element={<Needy/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter> 
   
   </> 
  );
}

export default App;
