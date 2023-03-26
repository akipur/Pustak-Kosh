import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Donor from './components/donor/Donor';
import Login from './components/Login';
import SignUp from './components/Signup';
import Needy from './components/needy/Needy';
import Learn from './components/Learn';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Donor" element={<Donor/>}/>
        <Route path="/Needy" element={<Needy/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Learn" element={<Learn/>}/>
        </Routes>
    </BrowserRouter> 
   
   </> 
  );
}

export default App;
