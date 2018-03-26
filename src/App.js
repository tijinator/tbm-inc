import React, { Component } from 'react';
import logo from './assets/tbmlogo.png';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	  <div class="logo-image">
          	<HashRouter>
			<NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
		</HashRouter>
	  </div>
	  <HashRouter>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          </HashRouter>
        </header>
	<HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
