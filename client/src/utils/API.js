import axios from "axios";

// authentifiaction query
export default {
  login: userData => 
    axios.post("/auth/login",  userData),
  signUp: userData => 
    axios.post('/auth/signup', userData),
  dashboard: token =>
    axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}})
};