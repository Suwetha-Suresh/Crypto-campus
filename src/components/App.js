import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginPage from './Login';
import Home from './Home';
import About from './About';
import Classroom from './Classroom';
import Navbar from './Navbar';
import Profile from './Profile';


function App() {
  return (
    <BrowserRouter>
           
                <Navbar/>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/Classroom' Component={Classroom} />
                    <Route exact path='/About' Component={About} />
                    <Route exact path='/Profile' Component={Profile} />
                    
                    {/* <Route exact path='/card/:user' Component={Card} /> */}
                </Routes>
            

        </BrowserRouter>
  );
}

export default App;
