import { elemetos } from "./global.js";
const queryParams = new URLSearchParams(window.location.search);
const user = queryParams.get("user");
const url = `http://localhost:8000/users/${user}`;
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const imgProfile = document.getElementById("imageUser");

window.main = () => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      firstName.value = body.firstName;
      imgProfile.value = body.imageUser;
      lastName.value = body.lastName;
    });
};

window.save = (e) => {
  e.preventDefault();
  const user = {};
  const inputNodes = Array.from(e.target.querySelectorAll("input"));
  inputNodes.forEach((input) => {
    user[input.name] = input.value;
  });
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.log(error);
  });
  userParams();
};

window.ocultarSeccion = () => {
  if (user != null) {
    elemetos.createAccount.style.display = "none";
    elemetos.logIn.style.display = "none";
  } else {
    elemetos.imgPerfil.style.display = "none";
    elemetos.notificacion.style.display = "none";
    elemetos.createPost.style.display = "none";
  }
};

window.userParams = () => {
  window.location.href = `./index.html?user=${user}`;
};

window.createPost = () => {
  console.log("entra");
  window.location.href = `./new.html?user=${user}`;
};

main();
ocultarSeccion();
