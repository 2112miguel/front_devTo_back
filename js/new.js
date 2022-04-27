import { elemetos } from "./global.js";
const queryParams = new URLSearchParams(window.location.search);
const user = queryParams.get("user");
const urlApi = "http://localhost:8000/posts";

window.crearPost = (e) => {
  e.preventDefault();
  const token = localStorage.getItem(user);
  console.log(token);
  const inputNodes = Array.from(e.target.querySelectorAll("input"));
  const txtAreaNode = e.target.querySelectorAll("textarea");
  const post = {};
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  //console.log()
  const month = months[d.getMonth()];
  const day = d.getUTCDate();
  inputNodes.forEach((input) => {
    post[input.name] = input.value;
  });
  txtAreaNode.forEach((txt) => {
    post[txt.name] = txt.value;
  });
  post["commentsPost"] = "0 comments";
  post["reactionsPost"] = "0 reactions";
  post["timeReadP"] = "4 min read";
  post["datePost"] = `${month} ${day}`;
  post["userEmail"] = user;
  console.log(post);
  fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  }); /*
  setTimeout(() => {
    window.location.href = `./index.html?user=${user}`;
  }, 1000);*/
};

window.ocultarSeccion = () => {
  if (user != null) {
    elemetos.createAccount.style.display = "none";
    elemetos.logIn.style.display = "none";
    elemetos.createPost.style.display = "none";
  } else {
    elemetos.imgPerfil.style.display = "none";
    elemetos.notificacion.style.display = "none";
  }
};

window.settings = () => {
  window.location.href = `./settings.html?user=${user}`;
};

window.userParams = () => {
  window.location.href = `./index.html?user=${user}`;
};

window.createPost = () => {
  console.log("entra");
  window.location.href = `./new.html?user=${user}`;
};

ocultarSeccion();
