import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Main/Navbar'
import About from './Components/NavBarElements/AboutCompany'
import PhotoGalery from './Components/NavBarElements/PhotoGalery'
import Footer from './Components/Main/Footer'
import Main from './Components/Main'
// import Error from './Components/404'


render((
  <BrowserRouter>
  <div>
    <Navbar />
    <Route exact path="/" component={Main} />
    <Route path="/AboutCompany" component={About} />
    <Route path="/PhotoGalery" component={PhotoGalery} />
    {/* <Route component={Error}/> */}
  </div>
    <Footer />
</BrowserRouter>
  ),
   document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

console.log("%cЭто сайт компании Рефкар", "color: Red; font-size: x-large");
