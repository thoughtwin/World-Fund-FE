import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import jwt_decode from "jwt-decode";
import AuthService from "../../services/AuthService"; 
import LogoImage from '../../assets/images/Logo.png';
import './transactionIdPage.css';

function TransId() {
  const [ value, setValue ] = useState('');
	const [userId, setUserId ] = useState(null);
	const [ inputError, setInputError ] = useState('');
	
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decodedToken = jwt_decode(token);
			setUserId(decodedToken._id)
			setValue(decodedToken.transactionId)
		} else {
			// TODO: signup 
		}
	},[])

  const proceedData = (data) => {
		if(validation(data)){
			const getToken = localStorage.getItem("token");
			AuthService.updateTransactionId(userId ,data, getToken).then((result)=>{
				swal('success', result.data.message, 'success')
				setInputError('');
			});
		}
  };
	const validation = (data) => {
		if(/[^a-zA-Z0-9]/.test( data )){
			setInputError('special characters and white space not allowed!')
			return false;
		}
		else if(value === ''){
			setInputError('Required!');
		}
		return true;
	};

	const validTxt= (e) => {
		setValue(e.target.value);
		setInputError('');
	};

  return (
    <>

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
								<span style={{marginTop: "-23px"}} className="form-text text-danger" >{inputError}</span>
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
