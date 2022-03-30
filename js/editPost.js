const queryParams = new URLSearchParams(window.location.search);
const idPost = queryParams.get('id');
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";
const idEditPost=document.getElementById('editPost')
const url=`${urlApi}/devto/${idPost}.json`
let postEdit={}
const mainEditPost=()=>{
    
    fetch(url).then((answ)=>answ.json())
    .then((body)=>{
       // console.log(body)
       // postEdit['authorImage']=body.authorImage
        postEdit['commentsPost']=body.commentsPost
        postEdit['datePost']=body.datePost
        postEdit['idPost']=body.idPost
        postEdit['namePost']=body.namePost
        postEdit['reactionsPost']=body.reactionsPost
        postEdit['tags']=body.tags
        postEdit['timeReadP']=body.timeReadP
        const editPost =`
                <form class="d-flex flex-column " onsubmit="editPost(event)">
                    <article class="p-4 bg-white my-1">
                        <div class="row w-50 mb-2" id="imgLink">
                            <input type="text" class="form-control border-0" name="imgPost" value="${body.imgPost}" required>
                        </div>
                        <div class="row w-50 mb-2">
                        <input type="text" name="authorImage" id="" value="${body.authorImage}" class="border-0 my-2" required>
                        </div>
                        <div class="row mb-3">
                            <input type="text" class="form-control form-control-lg border-0 my-2" name="titlePost" value="${body.titlePost}" aria-label="form-control-lg example" required>
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
                        <textarea class="form-control border-0" name="postContent" id="" cols="30" rows="10" required>${body.postContent}</textarea>
                    </div>
                    <div class="d-flex mb-2 p-1">
                        <article><button type="submit" class="btn btn-primary mx-2">Publish</button></article>
                        <article><button type="button" class="btn btn-outline-primary text-decoration-none link-dark mx-2 opacity-50">Save draft</button></article>
                        <article><button type="button" class="btn btn-outline-primary text-decoration-none link-dark mx-2 opacity-50">Revert new changes</button></article>
                    </div>
                </form>`
        idEditPost.insertAdjacentHTML('afterbegin',editPost)
       // console.log(body)
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log(postEdit)
}

const editPost=(e)=>{
    e.preventDefault();
    const inputPost=e.target.querySelectorAll('input')
    const txtAreaHtml=e.target.querySelectorAll('textarea')
    const txtArea= Array.from(txtAreaHtml)
    const inputPostarray= Array.from(inputPost)
    inputPostarray.forEach((input)=>{
        postEdit[input.name]=input.value
    })
    txtArea.forEach((input)=>{
        postEdit[input.name]=input.value
    })
    fetch(url,{
        method: 'PUT',
        body: JSON.stringify(postEdit),
        headers: {
            'Content-Type':'application/json'
        }      
    })
    .catch((error)=>{
        console.log(error)
    })
    
    setTimeout(()=>{
        window.location.assign(`./index.html`)
    },1000)
}

mainEditPost()