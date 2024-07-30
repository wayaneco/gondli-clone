import Axios from 'axios';
import cookie from 'cookie';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const { NEXT_LOCALE } = cookie.parse(document.cookie);

export const axios = Axios.create({
  baseURL: `${apiURL}/api${NEXT_LOCALE ? `/${NEXT_LOCALE}` : ''}/v1`,
  headers: {
    'X-API-Key': apiKey,
  },
});

export const csrf = () => {
  axios.get('/sanctum/csrf-cookie', {
    baseURL: apiURL,
  });
};
