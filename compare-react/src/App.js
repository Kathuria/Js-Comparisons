import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/Faq';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/faq" component={FAQ}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
