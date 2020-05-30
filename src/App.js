import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Final  from './components/final';
import Sorting from './components/Sorting';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Final} />
        <Route  path="/SortingVisualizer" component={Sorting} />
      </div>
    );
  }
}

export default App;