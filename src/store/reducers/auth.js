const authReducer = (state = {}, action) => {
    switch (action.type) {
      case "SIGN_UP_START":
        return state;
      case "SIGN_UP":
        return state;
      case "SIGN_UP_ERR":
        return state;
      default:
        return state; 
    }
  };
  
  export default authReducer;