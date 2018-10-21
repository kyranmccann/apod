import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import EntryList from './components/EntryList';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }

  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <Header />
        <EntryList />
        <Footer />
      </div>
    );
  }
}

export default App;
