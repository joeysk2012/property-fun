import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.js'
import Property from './components/Property.js'
import { FaStar, FaRegStar} from 'react-icons/fa';

class App extends Component {
  render() {
    console.log(Data.properties)
    let renderItems = Data.properties.map(property => {return <Property info={property} />})
    return (
      <div className="App">
      <h1>List of Properties:</h1>
      <h2>Click on Property to expand and Click <FaRegStar /> to Favorite</h2>
        {renderItems}
      </div>
    );
  }
}

export default App;
