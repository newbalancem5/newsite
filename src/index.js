import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Main/Navbar'
import About from './Components/NavBarElements/AboutCompany/AboutCompany'
import PhotoGalery from './Components/NavBarElements/PhotoGalery/PhotoGalery'
import Main from './Components/Main'
import Price from './Components/NavBarElements/Price/Price'
// import Error from './Components/404'
import './Components/NavBarElements/Price/footer.css'


render((
  <BrowserRouter>
  <div>
    <Navbar />
    <Route exact path="/" component={Main} />
    <Route path="/AboutCompany" component={About} />
    <Route path="/PhotoGalery" component={PhotoGalery} />
    <Route path="/Price" component={Price} />
    
  </div>
    
</BrowserRouter>
  ),
   document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

console.log("%cЭто сайт компании Рефкар", "color: Red; font-size: x-large");
