import { elemetos } from "./global.js";
const queryParams = new URLSearchParams(window.location.search);
const user = queryParams.get("user");
const idPost = document.getElementById("idPost");
const urlApi = "https://devto-7e35a-default-rtdb.firebaseio.com";
const urlApiExterna = `${urlApi}/devto.json`;
const url = `http://localhost:8000/posts`;
const textBoxId = document.getElementById("searchBoxId");

const render = () => {
  if (idPost.children.length > 0) {
    const post = Array.from(idPost.children);
    post.forEach((post) => {
      idPost.removeChild(post);
    });
  }
};

const busqueda = (event) => {
  render();
  event.preventDefault();
  const jsonDatabase = `${urlApi}/devto.json`;
  fetch(jsonDatabase)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      let searchTerm = textBoxId.value.toLowerCase();

      let array = Object.values(body);
      let keyArray = Object.keys(body);

      array.forEach((valor, index) => {
        let titulo = valor.titlePost.toLowerCase();

        if (titulo.search(searchTerm) != -1) {
          let idKey = keyArray[index];
          const card = plantillaPost(valor, idKey);

          idPost.insertAdjacentHTML("afterbegin", card);
        }
      });
    });
};

function plantillaPost(post) {
  return `
        <div class="d-flex my-2 justify-content-center">
          <div class="card">
            <a href="./post.html?id=${post._id}&user=${user}">
              <img src="${post.image}" class="card-img-top" alt="${post.titlePost}">
            </a>  
            <div class="card-body">
              <div class="d-flex">
                <div class="d-flex profileImg me-1">
                  <img src="${post.imageUser}" class="border border-1 rounded-circle profileImg">
                </div>
                <div class="d-flex flex-column text-start w-100">
                  <div class="d-flex flex-column text-start">
                    <div>
                      <button type="button" class="btn text-start text-decoration-none buttonAuthor rounded text-nowrap p-0">
                        <span class="fs-6 text-start">${post.userId}</span>
                      </button>
                    </div>
                    <span class="p-0 m-0 cardSmallText">Posted on: ${post.datePost}</span>
                  </div>
                  <a href="./post.html?id=${post._id}&user=${user}" class="titleLink my-2">
                    <h3 class="">${post.titlePost}</h3>
                  </a>
                  <div>
                    <a href="#" class="btn buttonTags">#webdev</a>
                    <a href="#" class="btn buttonTags">#productivity</a>
                    <a href="#" class="btn buttonTags">#css</a>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <a href="#" class="btn buttonAuthor p-1">
                        <svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                        <span>${post.reactionsPost}</span>
                      </a>
                      <a href="#" class="btn buttonAuthor p-1">
                      <svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                        <span>${post.commentsPost}</span>
                      </a>
                    </div>
                    <div>
                      <span class="cardSmallText">${post.timeReadP}</span>
                      <a href="#" class="btn buttonSave">Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
        `;
}

const pintPost = () => {
  render();
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      body.playload.forEach((post) => {
        const card = plantillaPost(post);
        idPost.insertAdjacentHTML("afterbegin", card);
      });
    });
};

const filterYear = () => {
  render();
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      const today = new Date();
      const todayYear = today.getFullYear();
      const posts = Object.values(body);
      const postKey = Object.keys(body);
      const post = posts.forEach((post, index) => {
        const miliseconds = parseInt(post.idPost);
        const date = new Date(miliseconds);
        const datePost = date.getFullYear();
        if (datePost == todayYear) {
          const card = plantillaPost(post, postKey[index]);
          idPost.insertAdjacentHTML("afterbegin", card);
        }
      });
    })
    .catch((error) => console.log(error));
};

const filterMonth = () => {
  render();
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      const today = new Date();
      const todayMonth = today.getMonth() + 1;
      const todayYear = today.getFullYear();
      console.log(today);
      const posts = Object.values(body);
      const postKey = Object.keys(body);
      const post = posts.forEach((post, index) => {
        const miliseconds = parseInt(post.idPost);
        const date = new Date(miliseconds);
        const datePost = date.getMonth() + 1;
        const yearPost = date.getFullYear();
        if (datePost == todayMonth && yearPost == todayYear) {
          const card = plantillaPost(post, postKey[index]);
          idPost.insertAdjacentHTML("afterbegin", card);
        }
      });
    })
    .catch((error) => console.log(error));
};

const filterWeek = () => {
  render();
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      const today = new Date();
      todayMiliseconds = today.getTime();
      sevenDaysMiliseconds = 604800000;
      lastSevenDaysMiliseconds = todayMiliseconds - sevenDaysMiliseconds;

      const posts = Object.values(body);
      const postKey = Object.keys(body);

      posts.forEach((post, index) => {
        const postMiliseconds = parseInt(post.idPost);
        if (postMiliseconds >= lastSevenDaysMiliseconds) {
          const card = plantillaPost(post, postKey[index]);
          idPost.insertAdjacentHTML("afterbegin", card);
        }
      });
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

pintPost();
ocultarSeccion();
