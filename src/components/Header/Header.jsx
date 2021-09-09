import React,  { Component } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default class Header extends Component {


    render() {
        return (

            <Router>
                <div>
                    <div className="jumbotron text-center" styleName="margin-bottom:0">
                        <h1>My First Bootstrap 4 Page</h1>
                        <p>Resize this responsive page to see the effect!</p> 
                    </div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <Link className="navbar-brand" to="/"> {this.props.navlink.link1} </Link> 
                        <Link className="navbar-brand" to="/about"> {this.props.navlink.link2} </Link>
                        <Link className="navbar-brand" to="/contact">{this.props.navlink.link3} </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id= "navbardrop" data-toggle="dropdown"> Dropdown Link</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/about">About</Link>
                                        <Link className="dropdown-item" to="/contact">Contacts</Link>
                                    </div>
                                </li>    
                            </ul>
                        </div>  
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/"></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}