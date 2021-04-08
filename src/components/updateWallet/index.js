import React, { useState, useEffect } from 'react';
import AuthService from "../../services/AuthService";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './updateWallet.css';

const UpdateWlt = () => {

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
    await AuthService.updateWallet(data).then((userResult) => {
      console.log(userResult)
      if (userResult.status === 200) {
        swal('success', userResult.data.message, 'success')
        e.target.reset();
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
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="row">
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="email">Wallet Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Bitcoin123"
              name="walletAddress1"
              ref={register({
                required: "this field is required"
              })}
            />
            <span className="form-text text-danger">{errors.walletAddress1 && errors.walletAddress1.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">Wallet Address</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Ethereum123"
              name="walletAddress2"
              ref={register({
                required: "this field is required"
              })}
            />
            <span className="form-text text-danger">{errors.walletAddress2 && errors.walletAddress2.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">Perfect Money</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Enter details here"
              name="PerfectMoney1"
              ref={register({
                required: "this field is required"
              })}
            />
            <span className="form-text text-danger">{errors.PerfectMoney1 && errors.PerfectMoney1.message}</span>
          </div>
          <div className="col-md-4 form-group tabbing_form">
            <label htmlFor="pwd">Perfect Money</label>
            <input
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Perfect money"
              name="PerfectMoney2"
              ref={register({
                required: "this field is required"
              })}
            />
            <span className="form-text text-danger">{errors.PerfectMoney2 && errors.PerfectMoney2.message}</span>
          </div>
        </div>
        <button type="submit" className="settingsave_btn">Save</button>
      </form >
    </>
  )
}
export default UpdateWlt;