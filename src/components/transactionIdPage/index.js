import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import AuthService from "../../services/AuthService"; 
import LogoImage from '../../assets/images/Logo.png';
import './transactionIdPage.css';

function TransId() {
  const [ value, setValue ] = useState('');
	const [userId, setUserId ] = useState(null);
  let history = useHistory();
	
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("tokens"));
		if (token) {
			const decodedToken = jwt_decode(token.token);
			setUserId(decodedToken._id)
			setValue(decodedToken.transactionId)
		} else {
			// TODO: signup pe bhejna hai
		}
	},[])

  const proceedData = (data) => {
		const getToken = JSON.parse(localStorage.getItem("tokens"))
    AuthService.updateTransactionId(userId ,data, getToken).then((result)=>{
      swal('success', result.data.message, 'success')
    });
  };
	const validation = (data) => {
		//validation
	};

	const validTxt= (e) => {
		setValue(e.target.value);
		validation(e.target.value);
	};

  return (
    <>
      {/* <div>
        <h1>TransId</h1>
        <input type="text" value={value} placeholder="TransactionId" onChange={(e)=>setValue(e.target.value)}/>
        <button type="button" onClick={()=>proceedData(value)}>Proceed</button>
      </div> */}

<div class="container">
		<div class="logo">
			<img alt="Logo.png" src={LogoImage} />
		</div>
	</div>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 col-md-9">
				<div class="warper">
					<div class="content">
						<h3>Just a few steps away to be in</h3>
						<p>Please initiate money transfer to below mentioned wallet address. Once your transaction is done enter the Transaction ID in the below field and click proceed.</p>
						<h6>Wallet address is</h6>
						<div class="copy_text">
							<h5>62ds51v1SF4ESWRDFTE1XCVASD131DSFdsfdsf5461521dsfb</h5>
							<a href="#"><img alt="" src="img/copy.png" /></a>
						</div>
						<div class="input_field">
							<form action="">
								<label for="fname">transaction id</label>
								<input type="text" value={value} onChange={(e)=>validTxt(e)} placeholder="Please enter your transaction ID with #" />
								<br />
								<button type="button" onClick={()=>proceedData(value)}>proceed</button>
							</form>
						</div>
						<p>We will get back to you once you are ready to sign-in in the system. Happy Investing!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
};

export default TransId;
