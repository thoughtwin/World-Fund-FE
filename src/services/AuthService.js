/**
 * Auth Service
 */
 import axios from 'axios';
 import url, { API_URL } from '../config';
 
 const AuthService = {
   login: (data) => {
     console.log('data', url.API_URL)
     return axios.post(url.API_URL + '/api/login', data)
   },
 
   signup: (data) => {
     console.log('data', url.API_URL)
     let filterData = {
       userName: data.userName,
       email: data.email,
       password: data.password,
       pinCode: data.pinCode
     }
     return axios.post(url.API_URL + '/api/Signup', filterData)
   },
 
   emailVerify: (data) => {
     console.log('data', url.API_URL)
     return axios.get(url.API_URL + '/api/VerifyEmail', {
       params: {
         email: data.email,
         token: data.token
       }
     })
   },
 
   forgotPwd: (data) => {
     console.log('data', url.API_URL)
     return axios.post(url.API_URL + '/api/ForgotPassword', data)
   },
 
   resend: (data) => {
     console.log('data', url.API_URL)
     return axios.post(url.API_URL + '/api/ResendEmail', data)
   },
 
   updateUser: (data) => {
     let filterData = {
       userName: data.userName,
       pinCode: data.pinCode
     }
     let tokenAuth = {
       token: data.tokens.token
     }
     console.log('filterData', url.API_URL)
     return axios.put(url.API_URL + '/api/UpdateUserDetails', filterData, {
       headers: {
         'Authorization': `Bearer ${tokenAuth.token}`
       }
     })
   },
 
   change_Password: (data) => {
     let filterData = {
       newPassword: data.data1.newPassword,
       oldPassword: data.data1.oldPassword
     }
     let tokenAuth = {
       token: data.tokens.token
     }
     console.log('filterData', url.API_URL)
     return axios.put(url.API_URL + '/api/changePassword', filterData, {
       headers: {
         'Authorization': `Bearer ${tokenAuth.token}`
       }
     })
   },
 
   updateWallet: (data) => {
     let filterData = {
       static1: data.walletAddress1,
       static2: data.walletAddress2,
       static3: data.PerfectMoney1,
       static4: data.PerfectMoney2
     }
     let tokenAuth = {
       token: data.tokens.token
     }
     console.log('filterData', url.API_URL)
     return axios.put(url.API_URL + '/api/UpdateUserDetails', filterData, {
       headers: {
         'Authorization': `Bearer ${tokenAuth.token}`
       }
     })
   },
 
   getUser: (token) => {
     console.log('token.token', url.API_URL)
     return axios.get(url.API_URL + '/api/ViewUserDetails', {
       headers: {
         'Authorization': `Bearer ${token.token}`
       }
     })
   },
 
   updateTransactionId: (userId, data, token) => {
     return axios.put(API_URL + `/api/transactionProcess/${userId}`, {transactionId:data},{
       headers: {
         'Authorization': `Bearer ${token.token}`
       }
     });
   },
 
   allUserList: (token) => {
     return axios.get(API_URL + '/api/admin/getAllUsers', {
       headers: {
         'Authorization': `Bearer ${token.token}`
       }
     });
   },
 
   verified: (token, userId) => {
     return axios.put(API_URL + `/api/admin/updateVerified/${userId}`, {isVerified:true}, {
       headers: {
         'Authorization': `Bearer ${token.token}`
       }
     });
   }
 
 }
 
 export default AuthService