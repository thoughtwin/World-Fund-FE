import React from "react";
import { Route, Redirect } from "react-router-dom";
import swal from "sweetalert";
import  useAuth  from "../context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          swal('warning', 'Please login first', 'warning'),
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;