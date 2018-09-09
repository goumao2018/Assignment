import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import {CardLists, SavedProperties} from './cardList.js';



class App extends Component {
  state = {
    properties: data
  }
  
  render() {
    return (
      <div className="row">
      <div className="column">
      <h2 className="title">Results</h2>
      <CardLists results={this.state.properties.results}/>
      </div>

      <div className="column">
      <h2 className="title">Saved Properties</h2>
      <SavedProperties savedcard={this.state.properties.saved}/>
      </div>
      </div>
    )
 }
}
export default App;

