import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/React-Router-Dom/Header'
import Home from './components/React-Router-Dom/Pages/Home'
import About from './components/React-Router-Dom/Pages/About'
import Profile from './components/React-Router-Dom/Pages/Profile'
import NotFound from './components/React-Router-Dom/Pages/NotFound'

function App() {


  return (
    <BrowserRouter getUserConfirmation="">
    <div>
    <Header/>
    </div>
   <Routes>
   <Route path='/' Component={Home}/>
    <Route path='/About' Component={About}/>
    <Route path='/Profile' Component={Profile}/>
    <Route Component={NotFound}/>
   </Routes>

    </BrowserRouter>

        
    
  )
}

export default App
