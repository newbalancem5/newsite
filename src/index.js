import React from 'react'
import { render } from 'react-dom'
import  { BrowserRouter , Switch, Route} from 'react-router-dom'
import Navbar from './Components/Main/Navbar'
// import Error from './Components/404'
import './Components/NavBarElements/Price/footer.css'
import Main from './Components/Main';
import PhotoGalery from './Components/NavBarElements/PhotoGalery/PhotoGalery';
import Price from './Components/NavBarElements/Price/Price';
import Errors from './Components/404';
import { createBrowserHistory } from "history";


const history = createBrowserHistory()
render(
  (
  
  <BrowserRouter history={history}>
    <div>
      <Navbar />
      <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/PhotoGalery" component={PhotoGalery} />
    <Route path="/Price" component={Price} />
    <Route path="*" component={Errors} />
      </Switch>
    </div>
</BrowserRouter>
  ),
   document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

console.log("%cЭто сайт компании Рефкар", "color: Red; font-size: x-large");
