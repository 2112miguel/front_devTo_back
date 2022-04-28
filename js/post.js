import { elemetos } from "./global.js";
const queryPost = new URLSearchParams(window.location.search);
const idPost = queryPost.get("id");
const user = queryPost.get("user");
const idcol3Html = document.getElementById("col3Post");
const idHtml = document.getElementById("post");
const urlApi = "http://localhost:8000";
const url = `${urlApi}/posts/${idPost}`;

const postMain = () => {
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      console.log(body);
      const post = `<div class="card p-3 m-1 mt-5" >
                        <img src="${body.image}" alt="...">
                        <article class="d-flex">
                            <div class""><img class="w-50 h-50 rounded-circle profileImg" src=${body.imageUser} alt=""></div>
                            <div class="d-flex flex-column">
                                <div><a>${body.userId}</a></div>
                                <div>${body.datePost}</div>
                            </div>
                        </article>
                        <div class="card-body">
                        <h1>${body.titlePost}</h1>  
                        <p class="card-text">${body.content}</p>
                        </div>
                    </div>`;
      idHtml.insertAdjacentHTML("afterbegin", post);
    });
};

window.editPost = () => {
  window.location.assign(`./editPost.html?id=${idPost}&user=${user}`);
};

window.deletePost = () => {
  const token = localStorage.getItem(user);
  const eliminar = confirm("¿Delete?");
  if (eliminar == true) {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    setTimeout(() => {
      window.location.assign(`./index.html?user=${user}`);
    }, 1000);
  }
};

const userCard = () => {
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      const userCard = `<div class="card-body">
                    <div class="d-inline-flex flex-row">
                        <img class="rounded-circle profileImg" src=${body.imageUser} alt="${body.userId}">
                        <div class="ms-2"><h5 class="card-title inline">${body.userId}</h5></div>
                    </div>
                    <div class="d-flex">
                        <a href="#" class="btn btn-primary text-light mt-3 w-100">Follow</a>
                    </div>
                    <div class="mt-3">
                    <p class="card-text">Another koder guy who love hacking</p>
                    </div>
                    </div>
                    `;
      idcol3Html.insertAdjacentHTML("beforeend", userCard);
    });
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

window.settings = () => {
  window.location.href = `./settings.html?user=${user}`;
};

postMain();
userCard();
ocultarSeccion();
