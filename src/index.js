import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Navbar from './Components/Main/Navbar'
// import Error from './Components/404'
import './Components/NavBarElements/Price/footer.css'
import Main from './Components/Main';
import PhotoGalery from './Components/NavBarElements/PhotoGalery/PhotoGalery';
import Price from './Components/NavBarElements/Price/Price';
import Errors from './Components/404/404'
// import { createBrowserHistory } from "history";


// const hashHistory = createBrowserHistory()
render(
  (

    <HashRouter
      hashType={"slash"}
      getUserConfirmation={"optionalFunc"}
    >
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/PhotoGalery" component={PhotoGalery} />
          <Route path="/Price" component={Price} />
          <Route component={Errors} />
        </Switch>
      </div>
    </HashRouter>
  ),
  document.getElementById('root'));

console.log("%cЭто сайт компании Рефкар", "color: Red; font-size: x-large");

