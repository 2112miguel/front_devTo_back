import { elemetos } from "./global.js";
const queryParams = new URLSearchParams(window.location.search);
const idPost = queryParams.get("id");
const user = queryParams.get("user");
const urlApi = "http://localhost:8000/posts";
const idEditPost = document.getElementById("editPost");
const url = `${urlApi}/${idPost}`;
let postEdit = {};
const mainEditPost = () => {
  fetch(url)
    .then((answ) => answ.json())
    .then((body) => {
      console.log(body);
      const editPost = `
                <form class="d-flex flex-column " onsubmit="editPost(event)">
                    <article class="p-4 bg-white my-1">
                        <div class="row w-50 mb-2" id="imgLink">
                            <input type="text" class="form-control border-0" name="image" value="${body.playload.image}" required>
                        </div>
                        <div class="row mb-3">
                            <input type="text" class="form-control form-control-lg border-0 my-2" name="titlePost" value="${body.playload.titlePost}" aria-label="form-control-lg example" required>
                        </div>
                    </article>
                    <article class="d-flex justify-content-between bg-light mt-3">
                        <div>
                            <i class="bi bi-type-bold mx-2"></i>
                            <i class="bi bi-type-italic mx-2"></i>
                            <i class="bi bi-link-45deg mx-2"></i>
                            <i class="bi bi-list-ol mx-2"></i>
                            <i class="bi bi-list-ul mx-2"></i>
                            <i class="bi bi-quote mx-2"></i>
                            <i class="bi bi-code mx-2"></i>
                            <i class="bi bi-code-square mx-2"></i>
                            <i class="bi bi-card-image mx-2"></i>
                        </div>
                        <div class=""><i class="bi bi-three-dots-vertical"></i></div>
                    </article>
                    <div class="row mb-2 p-1">
                        <textarea class="form-control border-0" name="content" id="" cols="30" rows="10" required>${body.playload.content}</textarea>
                    </div>
                    <div class="d-flex mb-2 p-1">
                        <article><button type="submit" class="btn btn-primary mx-2">Publish</button></article>
                        <article><button type="button" class="btn btn-outline-primary text-decoration-none link-dark mx-2 opacity-50">Save draft</button></article>
                        <article><button type="button" class="btn btn-outline-primary text-decoration-none link-dark mx-2 opacity-50">Revert new changes</button></article>
                    </div>
                </form>`;
      idEditPost.insertAdjacentHTML("afterbegin", editPost);
      // console.log(body)
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(postEdit);
};

window.editPost = (e) => {
  e.preventDefault();
  const token = localStorage.getItem(user);
  const inputPost = e.target.querySelectorAll("input");
  const txtAreaHtml = e.target.querySelectorAll("textarea");
  const txtArea = Array.from(txtAreaHtml);
  const inputPostarray = Array.from(inputPost);
  inputPostarray.forEach((input) => {
    postEdit[input.name] = input.value;
  });
  txtArea.forEach((input) => {
    postEdit[input.name] = input.value;
  });
  postEdit["_id"] = idPost;
  console.log(postEdit);

  fetch(url, {
    method: "PATCH",
    body: JSON.stringify(postEdit),
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  }).catch((error) => {
    console.log(error);
  });

  setTimeout(() => {
    window.location.assign(`./index.html?user=${user}`);
  }, 1000);
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

mainEditPost();
ocultarSeccion();
