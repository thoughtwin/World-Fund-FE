import React, { useState, useEffect } from 'react';
import AuthService from "../../services/AuthService";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './changepassword.css';
const ChangePwd = () => {

  const { register, handleSubmit, errors, getValues } = useForm({
    mode:"onTouched"
  }); // initialize the hook
  let history = useHistory();
  const [tokens, setToken] = useState({
    token: ""
  })

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("tokens"))
    setToken({ token: getToken.token })
  }, []);

  const onSubmit = async (data1, e) => {
    let data = { data1, tokens }
    await AuthService.change_Password(data).then((userResult) => {
      console.log(userResult)
      if (userResult.data.success === true) {
        swal('success', userResult.data.msg, 'success')
        e.target.reset();
      } else if (userResult.data.success === false) {
        swal('error', userResult.data.msg, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="row">
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="email">Old password</label>
            <input
              type="password"
              className="form-control"
              id="email"
              placeholder="**********"
              name="oldPassword"
              ref={register({
                required: "this field is required"
              })}
              />
            <span className="form-text text-danger">{errors.oldPassword && errors.oldPassword.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">New password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="**********"
              name="newPassword"
              ref={register({
                required: "this field is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Minimum eight characters, at least one letter, one number and one special character"
                }
              })}
              />
            <span className="form-text text-danger">{errors.newPassword && errors.newPassword.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">Confirm password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="**********"
              name="confirmNewPassword"
              ref={register({
                required: "this field is required",
                validate: value =>
                  value === getValues("newPassword") || "The passwords do not match"
              })}
              />
            <span className="form-text text-danger">{errors.confirmNewPassword && errors.confirmNewPassword.message}</span>
          </div>
        </div>
        <button type="submit" className="settingsave_btn">Save</button>
      </form>
    </div>
  )
}
export default ChangePwd;