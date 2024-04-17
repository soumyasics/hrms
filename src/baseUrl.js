import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  baseURL: 'http://hybrid.srishticampus.in:4018/hrms_api/', 

//local api

  // baseURL: 'http://localhost:4005/hrms_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance