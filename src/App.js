// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import './index.css';
 
import { Route, Switch } from 'react-router';
 
import Home from './Home';
import Contactus from './Contact';
import Services from './Service';
import Aboutus from './About';
import Error from './Error';
import Signup from './Signup';
 
function App() {
  return (
    <>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Aboutus} />
      <Route path="/service" component={Services} />
      <Route path="/contact" component={Contactus} />
      <Route path="/signup" component={Signup} />
      <Route path="/error" component={Error} />  
    </Switch>
    

    </>
  );
}

export default App;
