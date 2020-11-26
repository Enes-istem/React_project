import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/HomePage/Services/Services';
import Products from './components/pages/HomePage/Products/Products'

import SignUp from './components/pages/HomePage/SignUp/SignUp'
import Footer from './components/pages/HomePage/Footer/Footer'





function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/services" exact component = {Services}/>
        <Route path = "/products" exact component = {Products}/>
        <Route path = "/sign-up" exact component = {SignUp}/>


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
