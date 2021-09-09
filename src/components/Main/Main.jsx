import React, { Component } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Main extends Component {
  //get prop here 

    render() {
    return (
      
        <div>
          <div className="container" styleName="margin-top:30px">
            <div className="row">
              <div className="col-sm-4">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div className="fakeimg">Fake Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                <h3>Some Links</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-Link active" herf="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-Link" href="/about" > About </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-Link" href="/contact"> Contact </a>
                  </li>
                </ul>
                <hr className="d-sm-none"></hr>
              </div>
              <div className="col-sm-8">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="fakeimg">Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <br></br>
                <h2>TITLE HEADING</h2> 
                <h5>Title description, Sep 2, 2017</h5>
                <div className="fakeimg">Fake Image</div>
                <p>Some text.</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> 
              </div>
            </div>
          </div>
        </div>
    )
  }
}