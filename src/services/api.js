import 'dotenv/config';

import axios from 'axios';

const DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const api = axios.create({
  baseURL: DEV ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL,
});

export default api;
