/**
 * Auth Service
 */
import axios from 'axios';
import  url  from '../config';

const DashboardService = {
  getDashboardDetail: function() {
    let authToken = localStorage.getItem('tokens');
    let token= JSON.parse(authToken).access_token;
    return axios.get(url.API_URL+'/api/dashboard',{ headers: {"Authorization" : `Token ${token}`} });
  },
  checkWithdrawalAount: function(data){
    let authToken = localStorage.getItem('tokens');
    let token= JSON.parse(authToken).access_token;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
    return axios.post(url.API_URL+'/api/withdrawal-request',data,{ headers: headers });
  }
}

export default DashboardService;