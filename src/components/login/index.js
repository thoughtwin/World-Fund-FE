import React, { useState, useEffect, useCallback } from "react";
import AuthService from "../../services/AuthService";
import swal from 'sweetalert';
import useAuth from '../context/auth';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
import LogoImage from '../../assets/images/Logo.png';
import signupLatest from '../../assets/images/Signup_Latest.png';
import './login.css';
const Login = () => {
  const { setAuthTokens } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched"
  }); // initialize the hook
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginStatus: false
  });

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      history.push('/dashboard');
      swal('warning', 'Already Login!', 'warning', { button: false, timer: 3000 })
    } else {
      setUser({ loginStatus: true });
    }
  }, [])

  const onSubmit = async (data) => {
    await AuthService.login(data).then((userResult) => {
      console.log(userResult)
      if (userResult.data.status === 200) {
        setAuthTokens(userResult.data);
        let decodedToken = jwt_decode(localStorage.getItem("tokens"))
        // eslint-disable-next-line no-unused-expressions
        decodedToken.isVerified ? swal('success', userResult.data.message, 'success', { button: false, timer: 3000 }) : null;
        setUser({
          email: "",
          password: ""
        })
        decodedToken.isVerified === true && decodedToken.role === 'user' ? history.push("/dashboard") : decodedToken.role === 'admin' ? history.push("/admin/usersList") : history.push("/user/transactionId");
      } else if (userResult.data.status === 201) {
        swal('error', userResult.data.message, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }


  return (
    <div className="login_content loginscreen_bg" style={{
      backgroundImage: `url(${signupLatest})`
    }}>
      <div className="loginleft_content">
        <img src={LogoImage} alt="logo.png" />
        <h1>Login to your account</h1>
        <p className="detail_proceed">Please enter your details to proceed.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group signup_form">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter e-mail address"
              ref={register({
                required: "this field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please enter a vaild e-mail address"
                }
              })} />
            <span className="form-text text-danger">{errors.email && errors.email.message}</span>
          </div>
          <div className="form-group signup_form loginpass">
            <label htmlFor="pwd">Password</label>
            <Link to='forgot_password'><p>Forgot password?</p></Link>
            <input
              type="password"
              className="form-control"
              name="password"
              id="pwd"
              placeholder="Enter password"
              ref={register({ required: "this field is required" })} />
            <span className="form-text text-danger">{errors.password && errors.password.message}</span>
          </div>
          <button type="submit" className="loginbtn">Login</button>
          <p className="dont_have">Dont’ have an account?<Link to="/signup" style={{ textDecoration: 'none' }}><span>Sign up</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;