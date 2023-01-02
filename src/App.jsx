import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Upload from './pages/Upload';


const App = () => {
  return (
    <div >
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/upload' exact component={Upload} />
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
        <Route path='/signUp' exact component={SignUp} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
