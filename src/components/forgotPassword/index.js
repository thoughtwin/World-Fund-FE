import React, { useState } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthService from "../../services/AuthService";
import LogoImage from '../../assets/images/Logo.png'

const Forgotpassword = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched"
  }); // initialize the hook

  const onSubmit = async (data, e) => {
    await AuthService.forgotPwd(data).then((userResult) => {
      console.log(userResult)
      if (userResult.data.status === 200) {
        swal('success', userResult.data.message, 'success')
        e.target.reset();
      } else if (userResult.data.status === 201) {
        swal('error', userResult.data.msg, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  return (
    <div className="forgotmain_container">
      <img alt="Logo.png" src={LogoImage} style={{
        margin: "30px"
      }} />
      <div className="forgotpass_container">
        <h1>Forgot your password?</h1>
        <p className="detail_proceed">We’ll help you reset it and get back on track.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="resetbtn">
            <button type="submit" className="loginbtn">Reset Password</button>
          </div>
          <Link to="/login" style={{ textDecoration: 'none' }}><p className="dont_have">Back</p></Link>
        </form>
      </div>
    </div>
  )
}
export default Forgotpassword;