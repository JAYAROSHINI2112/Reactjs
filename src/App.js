import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import WelcomeC from './components/welcome'
       class App extends Component {
       render(){
         return(
           <div className="App">
           <Greet />
           <WelcomeC />
           </div>
         );
       }
  }

export default App;
