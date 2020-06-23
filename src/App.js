import React from 'react';

import './App.css';
import Register from './components/Register'
import Login from './components/login'
import { Route, Switch } from 'react-router-dom';
import Headers from './components/headers'
function App() {
  return (
    <div className="App body">
      <header className="App-header">
        <Headers></Headers>
       <Switch>
       <Route path="/login" component={Login}></Route>
         <Route path="/register" component={Register}></Route>
       </Switch>
      
       </header>
      
    </div>
  );
}

export default App;
