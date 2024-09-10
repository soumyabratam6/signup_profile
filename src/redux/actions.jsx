export const signupUser = (user) => ({
    type: 'SIGNUP_USER',
    payload: user,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  