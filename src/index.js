import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// CREATE REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

// ENHANCING STORE WITH FIREBASE
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from "./firebase/firebase";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  )
)

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
