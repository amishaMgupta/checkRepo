import React from 'react';
import Customer from './components/customer';
// import Admin from './components/admin';
// import Home from './components/customer/home/home';
// import Kitchen from './components/customer/kitchen/kitchen';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


class App extends React.Component {
  render() {
    return <div>
      {/* <Router>
              <Switch>
      
          <Route path="/admin">
            <Admin />
          </Route>
          <Router exact path = "/">
            <Customer/>
          </Router>
          <Router exact path = "/home">
            <Home/>
          </Router>
          <Router exact path = "/kitchen">
            <Kitchen/>
          </Router>
        </Switch>
    </Router> */}
    <Customer></Customer>
    </div>;
  }
}


export default App;
