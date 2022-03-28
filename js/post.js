const queryPost = new URLSearchParams(window.location.search)
const idPost = queryPost.get('id')
const idHtml=document.getElementById('post')
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";
console.log(idPost)

const postMain=()=>{
    const url=`${urlApi}/devto/${idPost}.json`
    console.log(url)
    fetch(url).then((answ)=>answ.json())
    .then((body)=>{
        console.log(body)
        const post=`<div class="card p-3 m-4 mt-5" >
                        <img src="${body.imgPost}" alt="...">
                        <article class="d-flex">
                            <div class""><img class="w-50 h-50 rounded-circle profileImg" src=${body.authorImage} alt="${body.namePost}"></div>
                            <div class="d-flex flex-column">
                                <div><a>${body.namePost}</a></div>
                                <div>${body.datePost}</div>
                            </div>
                        </article>
                        <div class="card-body">
                        <h1>${body.titlePost}</h1>  
                        <p class="card-text">${body.postContent}</p>
                        </div>
                    </div>`
            idHtml.insertAdjacentHTML('afterbegin',post)
        //console.log(Object.keys(body).map)
    })
}

postMain()