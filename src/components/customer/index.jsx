import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Dashboard from './dashboard/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import Home from './home/home';
import Kitchen from './kitchen/kitchen';
import DisplayProduct from './displayProduct/displayProduct';
// let { path, url } = useRouteMatch();

class Customer extends React.Component {
    render() {
      return  <div>
          <Header/>
          <Router>
              <Switch>
          <Route exact path = "/">
            <Dashboard/>
          </Route>
          <Route exact path = "/home">
            <Home/>
          </Route>
          <Route exact path = "/kitchen">
            <Kitchen/>
          </Route>
          <Route exact path = "/displayProduct">
            <DisplayProduct />
          </Route>
        </Switch>
    </Router>
          <Footer/>

          
      </div>
    }
  }


export default Customer;