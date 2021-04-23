import * as actions from './actionTypes';

export const signUp = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.SIGN_UP_START });
    
    firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => {
      dispatch({ type: actions.SIGN_UP_SUCCESSFULL });
      })
      .catch(err => {
        dispatch({ type: actions.SIGN_UP_ERROR }, err);
      });
  };
};

export const signIn = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.SIGN_IN_START });

    firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => {
      dispatch({ type: actions.SIGN_IN_SUCCESSFULL });
      })
      .catch(err => {
        dispatch({ type: actions.SIGN_IN_ERROR }, err);
      });
  };
}