export const signUp = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(user);
    dispatch({ type: "SIGN_UP_START" });
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.signUpEmail, user.signUpPassword)
      .then(() => {
        dispatch({ type: "SIGN_UP" });
      })
      .catch(err => {
        dispatch({ type: "SIGN_UP_ERR" }, err);
      });
  };
};