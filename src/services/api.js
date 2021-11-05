import axios from 'axios';
 
//http://localhost:3333/tasks
 
const api = axios.create({
  //baseURL: 'http://localhost:3333/'
  baseURL: 'http://18.228.7.152:3333/'
});
 
export default api;