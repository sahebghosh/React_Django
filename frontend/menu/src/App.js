import React, { Component } from 'react';
import Table from './layout/Table';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Table />
        </div>
        
      </div>
    );
  }
}

export default App;
