import React, { useState, useEffect } from 'react';
import AuthService from "../../services/AuthService";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './updateprofile.css';
const UpdateProfile = () => {

  const { register, handleSubmit, errors, getValues } = useForm(); // initialize the hook
  let history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    pinCode: "",
    invitedBy: ""
  });
  const [tokens, setToken] = useState({
    token: ""
  })

  const { userName, pinCode, invitedBy } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  useEffect(() => {
    getProfile();
    // const getToken = JSON.parse(localStorage.getItem("tokens"))
    // setToken({ token: getToken.token })
    // await AuthService.getUser(getToken).then((userResult) => {
    //   console.log(userResult)
    //   if (userResult.status === 200) {
    //     setUser({
    //       userName: userResult.data.data.userName,
    //       pinCode: userResult.data.data.pinCode,
    //       invitedBy: userResult.data.data.invitedBy
    //     })
    //   }
    // }).catch((error) => {
    //   console.log(error);
    //   swal('error', 'Internal Server Error', 'error')
    // })
  }, []);

  const getProfile = async () => {
    console.log("working");
    const getToken = JSON.parse(localStorage.getItem("tokens"))
    setToken({ token: getToken.token })
    await AuthService.getUser(getToken).then((userResult) => {
      console.log(userResult)
      if (userResult.status === 200) {
        setUser({
          userName: userResult.data.data.userName,
          pinCode: userResult.data.data.pinCode,
          invitedBy: userResult.data.data.invitedBy
        })
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  const onSubmit = async (e, i) => {
    i.preventDefault();
    const tokens = JSON.parse(localStorage.getItem("tokens"))
    let data = { userName, pinCode, invitedBy, tokens }
    await AuthService.updateUser(data).then((userResult) => {
      let userName = userResult.data.data.userName
      console.log(userResult)
      if (userResult.status === 200) {
        localStorage.setItem("userName", JSON.stringify(userName));
        swal('success', userResult.data.message, 'success')
        setUser({
          userName: userResult.data.data.userName,
          pinCode: userResult.data.data.pinCode,
          invitedBy: userResult.data.data.invitedBy
        })
        setToken({
          token: ""
        })
      } else if (userResult.status === 401) {
        swal('error', userResult.data.message, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  return (
    <>
      <form onSubmit={(e, i) => onSubmit(e, i), handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="anna-smith222"
              name="userName"
              value={userName}
              ref={register({
                required: "this field is required",
                minLength: {
                  value: 4,
                  message: "please enter user name minimum 4 characters"
                }
              })}
              onChange={e => onInputChange(e)} />
            <span className="form-text text-danger">{errors.userName && errors.userName.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">Pin Code</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              placeholder="anna-smith@mail.com"
              name="pinCode"
              pattern="[0-9]*"
              value={pinCode}
              ref={register({
                required: "this field is required",
                minLength: {
                  value: 6,
                  message: "please enter valid pin code"
                }
              })}
              onChange={e => onInputChange(e)} />
            <span className="form-text text-danger">{errors.pinCode && errors.pinCode.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">I was invited by</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Enter details here"
              name="invitedBy"
              value={invitedBy}
              // ref={register({
              //   required: "this field is required",
              // })}
              onChange={e => onInputChange(e)} />
            {/* <span className="form-text text-danger">{errors.invitedBy && errors.invitedBy.message}</span> */}
          </div>
        </div>
        <button type="submit" className="settingsave_btn">Save</button>
      </form>
    </>
  )
}
export default UpdateProfile;