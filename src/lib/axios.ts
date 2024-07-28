import Axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const axios = Axios.create({
  baseURL: `${apiURL}${apiPrefix}`,
  headers: {
    'X-API-Key': apiKey,
  },
});

export const csrf = () =>
  axios.get('/sanctum/csrf-cookie', {
    baseURL: apiURL,
  });
