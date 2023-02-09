import axios from "axios";

const API_KEY = "AIzaSyAGFACQ0SIf13EKsFxu4pGPKlW9DF5D8c8";

export async function login(email, password) {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    API_KEY;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);

  const token = response.data.idToken;

  return token;
}

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;

  return token;
}
