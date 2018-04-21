import React, { Component } from 'react';
import ListBody from '../containers/ListBody'
import ListVisual from '../containers/ListVisual'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ListBody/>
          {/* <MyComponent/> */}
        </header>
      </div>
    );
  }
}

export default App;