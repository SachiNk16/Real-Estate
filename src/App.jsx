import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


export default function App() {
  return( <BrowserRouter>
  <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/About' element={<About/>} />
     <Route path='/Profile' element={<Profile />} />
     <Route path='/Sign-in' element={<SignIn />} />
     <Route path='/Sign-Up' element={<SignUp />} />
    
  </Routes>
  </BrowserRouter>
  )
}



