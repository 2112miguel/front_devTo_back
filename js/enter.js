import { tokenLocal } from "./global.js";
const url = `http://localhost:8000/auth/login`;

window.logIn = (e) => {
  e.preventDefault();
  const objPassword = {};
  const inputsData = Array.from(e.target.querySelectorAll("input"));
  inputsData.forEach((input) => {
    if (input.value != "") {
      objPassword[input.name] = input.value;
    }
  });
  const token = fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: objPassword.email,
      password: objPassword.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  token
    .then((res) => res.json())
    .then((body) => {
      localStorage.setItem(`${objPassword.email}`, body.payload);
    });
  userParams(objPassword.email);
};

const userParams = (usuario) => {
  setTimeout(() => {
    window.location.href = `./index.html?user=${usuario}`;
  }, 1000);
};
