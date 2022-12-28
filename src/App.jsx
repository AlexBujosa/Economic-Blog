import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Login } from './pages/Login';


const App = () => {
  return (
    <div >
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
