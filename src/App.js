import React, {Component} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: {
            link1: 'Home',
            link2: 'About',
            link3: 'Contact'
            }
    }
  }
   render(){
     return (
       <div className="App">
         <Header navlink = {this.state.nav} />
         <Home />
         <Footer />
       </div>
     );
   }
}

export default App;
