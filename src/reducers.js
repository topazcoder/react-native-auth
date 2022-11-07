/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
import signupReducer from './containers/Signup/reducer';
import loginReducer from './containers/Login/reducer';
// import forgotPasswordReducer from './containers/ForgotPassword/reducer';
// import navigationReducer from './containers/Navigation/reducer';
// import authenticationReducer from './containers/Authentication/reducer';
// import adminReducer from './containers/Admin/reducer';
// import accountReducer from './containers/Account/reducer';
// import resetPasswordReducer from './containers/ResetPassword/reducer';
// import usersReducer from './containers/Users/reducer';

const createReducer = () =>
  combineReducers({
    notifications,
    signup: signupReducer,
    login: loginReducer,
    // forgotPassword: forgotPasswordReducer,
    // navigation: navigationReducer,
    // authentication: authenticationReducer,
    // admin: adminReducer,
    // account: accountReducer,
    // resetPassword: resetPasswordReducer,
    // users: usersReducer,
  });

export default createReducer;
