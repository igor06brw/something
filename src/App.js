import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Layout from './components/Layout/Layout';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import SignOut from './containers/SignOut';

import { useSelector } from 'react-redux';

const App = () => {
  let routes;
  
  const auth = useSelector(state => state.firebase.auth);
  
  
  if(auth.uid !== undefined) {
    routes = (
      <Switch>
        <SignOut />
      </Switch>
    ) 
  } else {
      routes = (
        <Switch>
          <div>
            <SignIn />
            <SignUp />
          </div>
        </Switch>
      )
  }

  return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
  );
}

export default App;
