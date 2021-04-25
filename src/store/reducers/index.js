import { combineReducers } from "redux";
import authReducer from "./auth";
import outfitReducer from "./outfit";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  outfit: outfitReducer
});