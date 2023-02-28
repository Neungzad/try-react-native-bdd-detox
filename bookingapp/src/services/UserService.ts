import axios from 'axios';
const api = axios.create({baseURL: 'http://10.0.2.2:7071/users/api/v1/'});

const login = (email: string, password: string) => {
  return api.post('users/login', {
    login: email,
    password,
  });
};

const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  // return api.post('users', {
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  // });
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export default {
  login,
  signUp,
};
