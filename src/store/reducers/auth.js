const authReducer = (state = {}, action) => {
    switch (action.type) {
      case "SIGN_UP_START":
        return state;
      case "SIGN_UP":
        return state;
      case "SIGN_UP_ERR":
        return state;
      case "SIGN_IN_START":
        return state;
      case "SIGN_IN":
        return state;
      case "SIGN_IN_ERR":
        return state;
      case "SIGN_OUT_START":
        return state;
      case "SIGN_OUT":
        return state;
      case "SIGN_OUT_ERR":
        return state;
      default:
        return state; 
    }
  };
  
  export default authReducer;