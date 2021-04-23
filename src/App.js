import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Layout from './components/Layout/Layout';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';

function App() {
  return (
      <div className="App">
        <Layout>
          <SignIn />
          <SignUp />
        </Layout>
      </div>
  );
}

export default App;
