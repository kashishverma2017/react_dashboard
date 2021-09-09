import React,  { Component } from 'react'
import './About.css';


export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h2>Card Image</h2>
                <p>Image at the top (card-img-top):</p>
                <div className="card" style={{width:'400px'}}>
                    <img className="card-img-top" src="E:\www\react\react_routes\src\components\About\img_bg.jpg" alt="Card image" styles={{width:'100%'}} />
                    <div className="card-body">
                        <h4 className="card-title">Kashish Verma</h4>
                        <p className="card-text">Kashish Don't give up </p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        ) 
    }
 }