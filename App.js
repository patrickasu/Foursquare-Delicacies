import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './style/mystyle.css';
import Slideshow from './components/slider';
import Home from './components/home';
import EventsContainer from './components/eventsContainer';
import Aboutus from './components/aboutus';
import Footer from './components/footer';
import Foodtable from './components/foodtable';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" render={()=> <Navbar name="FOUR SQUARE DELICACIES" />}/>
          <Slideshow />
          <Route exact path="/" render={()=> <Home title="FOUR SQUARE DELICACIES" />}/>
          <Route path="/events" render={()=> <EventsContainer />}/> 
          <Route path="/aboutus" render={()=> <Aboutus />}/>
          <Route path="/foodtable" render={()=> <Foodtable />}/> 
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
