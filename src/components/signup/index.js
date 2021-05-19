import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import './signup.css';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LogoImage from '../../assets/images/Logo.png';
import signupLatest from '../../assets/images/Signup_Latest.png';

const Signup = () => {
  // initialize the hook
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onTouched"
  });

  let history = useHistory();

  const onSubmit = async (data, e) => {
    await AuthService.signup(data).then((userResult) => {
      console.log(userResult)
      if (userResult.data.status === 200) {
        swal('success', userResult.data.message, 'success')
        e.target.reset();
        history.push('/login');
      } else {
        swal('error', userResult.data.message, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  return (
    <div className="login_content new_user_registration" style={{
      backgroundImage: `url(${signupLatest})`
    }}>

      <div className="loginleft_content ">
        <img alt="Logo.png" src={LogoImage} />
        <h1 className="user_registration">New user registration</h1>
        <p className="detail_proceed signup_content">Please enter your details to proceed.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group signup_form">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="anna-smith222"
              name="userName"
              ref={register({
                required: "this field is required",
                minLength: {
                  value: 4,
                  message: "please enter user name minimum 4 characters"
                }
              })} />
            <span className="form-text text-danger">{errors.userName && errors.userName.message}</span>
          </div>
          <div className="form-group signup_form">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter e-mail address"
              name="email"
              ref={register({
                required: "this field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please enter a vaild e-mail address"
                }
              })} />
            <span className="form-text text-danger">{errors.email && errors.email.message}</span>
          </div>
          <div className="form-group signup_form">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              ref={register({
                required: "this field is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Minimum eight characters, at least one letter, one number and one special character"
                }
              })} />
            <span className="form-text text-danger">{errors.password && errors.password.message}</span>
          </div>
          <div className="form-group signup_form">
            <label htmlFor="pwd">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Confirm Password"
              name="confirmPassword"
              ref={register({
                required: "this field is required",
                validate: value =>
                  value === getValues("password") || "The passwords do not match"
              })} />
            <span className="form-text text-danger">{errors.confirmPassword && errors.confirmPassword.message}</span>
          </div>
          <div className="row">
            <div className="col-md-6 form-group signup_form pincode_div">
              <label htmlFor="pwd">Pin code</label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="******"
                name="PinCode"
                pattern="[0-9]*"
                ref={register({
                  required: "this field is required"
                })} />
              <span className="form-text text-danger">{errors.pinCode && errors.pinCode.message}</span>
            </div>
            <div className="col-md-6 form-group signup_form pincode_div">
              <label htmlFor="pwd">Confirm pin code</label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="******"
                name="confirmPinCode"
                pattern="[0-9]*"
                ref={register({
                  required: "this field is required",
                  validate: value =>
                    value === getValues("pinCode") || "The pinCode do not match"
                })} />
              <span className="form-text text-danger">{errors.confirmPinCode && errors.confirmPinCode.message}</span>
            </div>
          </div>
          <div className="form-group signup_form">
            <label htmlFor="pwd">I was invited by</label>
            <input
              type="email"
              className="form-control"
              id="pwd"
              placeholder="anna-smith@mail.com"
              name="invitedBy"
              ref={register({
                required: "this field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please enter a vaild e-mail address"
                }
              })} />
            <span className="form-text text-danger">{errors.invitedBy && errors.invitedBy.message}</span>
          </div>
          <div className="checkbox remember_div">
            <label><input
              type="checkbox"
              name="remember" /> I have read <b>rules</b> and I <b>accept</b> them</label>
          </div>
          <button type="submit" className="create_accountbtn">Create a free account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;