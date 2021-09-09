import React,  { Component } from 'react'

export default class Contact extends Component {
    render(){
        return (    
            <div>
                <div className="container">
                    <h2>Form Row/Grid</h2>
                    <p>In this example we will demonstrate the differences between .row and .form-row.</p>
                    <p>Create two form elements that appear side by side with .row and .col:</p>
                    <form>
                        <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Enter password" name="pswd" />
                        </div>
                        </div>
                    </form>
                    <br />
                    
                    <p>Create two form elements that appear side by side with .form-row and .col:</p>
                    <form>
                        <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div class="col">
                            <input type="password" className="form-control" placeholder="Enter password" name="pswd" />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            )
        }
    }
