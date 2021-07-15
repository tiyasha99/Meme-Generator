import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import MemeGenerator from './Components/MemeGenerator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          name="Meme Generator"
        />
        <MemeGenerator 
        />
      </div>
    );
  }
}

export default App;
