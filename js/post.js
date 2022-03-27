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
        const post=`<div class="card" style="width: 18rem;">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZB74tbLi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/inayndnqqdvee33qaaqe.jpeg" class="card-img-top" alt="...">
                        <article class="d-flex">
                            <div class""><img class="w-50 h-50 rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt=""></div>
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