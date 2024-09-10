
const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_USER':
        return { ...state, user: action.payload };
      case 'LOGOUT_USER':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  