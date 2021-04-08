import React, { Component } from 'react';
import AuthService from "../../services/AuthService";
import swal from 'sweetalert';
class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {email:""};
    this.verifyFunction()
  }

  verifyFunction = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let email = params.get('email');
    let token = params.get('token');
    let data = { email, token }
    AuthService.emailVerify(data).then((verifyResult) => {
      if (verifyResult.data.status === 200) {
        swal('success', verifyResult.data.message, 'success')
      } else {
        swal('error', verifyResult.data.message, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    let data =  this.state.email 
    await AuthService.forgotPwd(data).then((userResult) => {
      console.log(userResult)
      if (userResult.data.status === 200) {
        swal('success', userResult.data.message, 'success')
        this.setState({
          email: "",
          password: ""
        })
      } else if (userResult.data.status === 201) {
        swal('error', userResult.data.msg, 'error')
      }
    }).catch((error) => {
      console.log(error);
      swal('error', 'Internal Server Error', 'error')
    })
  }

   render() {
     return (
      <div className="container">
        <form className='loginForm' onSubmit={this.onSubmit}>
          <h3 align='center'>Reset Password</h3>
  
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Enter email" onChange={e =>this.onInputChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Resend Email</button>
        </form>
      </div>
     )
  
   }
}
export default Verify;