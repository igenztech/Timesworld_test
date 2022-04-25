import React from 'react';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home/Home';
import {ListProvider} from './Context/Context'
import Asia from './Home/Asia';
import Europe from './Home/Europe';
import Header from './Home/Header';
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <Header /> */}
        <Switch>
        <ListProvider>
      <Route exact path='/' component={Signin} />
      <Header/>
      <Route path='/Home' component ={Home} />
      <Route path="/Asia" component={Asia}/>
      <Route path="/Europe" component={Europe}/>
      
      </ListProvider>

      </Switch>
      </Router>
      </React.Fragment>
    
  );
}

export default App;
