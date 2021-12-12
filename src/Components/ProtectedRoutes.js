// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoutes = ({auth, element:Element,  ...restOfProps}) => {
//     return (
//         <Route
//           {...restOfProps}
//           render={(props) =>
//             auth ? <Element {...props} /> : <div>Nopes</div>
//           }
//         />
//       );
// }

// export default ProtectedRoutes;

import React, {useState, useEffect} from "react";
import { Navigate, Outlet } from "react-router-dom";
import firebaseConfig from './firebaseConfig';
import { getAuth, onAuthStateChanged} from "firebase/auth";


const useAuth = () => {
  // const user = { loggedIn: false };
  // return user && user.loggedIn;

  const auth = getAuth();
  const user = auth.currentUser;
  return user
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  console.log(isAuth)
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;