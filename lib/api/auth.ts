/* eslint-disable no-console */
import axios from 'axios';

interface SingUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  // birthday: string;
}

// eslint-disable-next-line import/prefer-default-export
export const signupAPI = (body: SingUpAPIBody) => {
  axios
    .post('/api/auth/signup', body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
