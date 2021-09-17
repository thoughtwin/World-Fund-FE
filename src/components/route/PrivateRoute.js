import React from "react";
import { Route } from "react-router-dom";
import  useAuth  from "../context/auth";
import jwt_decode from "jwt-decode";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  let token = JSON.parse(localStorage.getItem("tokens"));
  let {role, verified} = "";
  if (token) {
    role  = jwt_decode(token.token).role;
    verified = jwt_decode(token.token).isVerified
  }
  let pathName = rest.path
  const logedOut = () => {
    window.localStorage.clear();
    window.location.href = '/login'
  }

  return (
    <Route
      {...rest}
      render={props =>
        authTokens && role === 'admin' && (pathName.startsWith('/admin/'))
        ? (<Component {...props} />)
        : authTokens && (pathName.startsWith('/') && role && role === 'user' && !pathName.startsWith('/admin/') && verified && verified === true && !pathName.startsWith('/user/')) 
        ? (<Component {...props} />) 
        : authTokens && verified === false && role === 'user' && (pathName.startsWith('/user/') && !pathName.startsWith('/admin/'))
        ? (<Component {...props} />)
        : logedOut()
      }
    />
  );
}

export default PrivateRoute;