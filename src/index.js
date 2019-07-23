import React from 'react'
import { render } from 'react-dom'
import  { BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Main/Navbar'
// import Error from './Components/404'
import './Components/NavBarElements/Price/footer.css'


render((
  <BrowserRouter>
    <Navbar />
</BrowserRouter>
  ),
   document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

console.log("%cЭто сайт компании Рефкар", "color: Red; font-size: x-large");
