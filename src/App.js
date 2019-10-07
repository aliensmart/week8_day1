import React from 'react';
import {Route} from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import One from './component/One';
import Two from './component/Two';

function App() {
  return (
    <div className="App">
      <span>
        <Link type='nav' to='/component1'>first Component</Link>
        <Link type='nav' to='/component2'>second Component</Link>
      </span>
      <Route path='/component1' component={One}/>
      <Route path='/component2' component={Two}/>
    </div>
  );
}

export default App;
