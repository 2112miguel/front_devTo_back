import { elemetos } from "./global.js";
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
      if (body.success == true) {
        localStorage.setItem(`${objPassword.email}`, body.payload);
        console.log(localStorage.getItem(objPassword.email));
        userParams(objPassword.email);
      }
    });
};

const userParams = (usuario) => {
  setTimeout(() => {
    window.location.href = `./index.html?user=${usuario}`;
  }, 1000);
};

window.ocultarSeccion = () => {
  elemetos.createAccount.style.display = "none";
  elemetos.logIn.style.display = "none";
  elemetos.createPost.style.display = "none";
  elemetos.imgPerfil.style.display = "none";
  elemetos.notificacion.style.display = "none";
};

ocultarSeccion();
