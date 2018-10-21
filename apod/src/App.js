import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor(){
    super();
    const API_KEY = process.env.REACT_APP_APOD_API_KEY;
    // this.url =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`
    this.url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    this.state = {
      byDate: null,
      searchDate: null,
    }

  }

    getByDate = (date) => {
      axios
        .get(`${this.url}&date=${date}`)
        .then(response => {
          this.setState(() => ({
            byDate: response.data,
          }))
        })
        .catch(error => {
          console.error('Sorry ', error);
        })
    }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Home}/>

        <Footer />
      </div>
    );
  }
}

export default App;
