const queryPost = new URLSearchParams(window.location.search)
const idPost = queryPost.get('id')
const idHtml=document.getElementById('post')
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";
//console.log(idPost)

const postMain=()=>{
    const url=`${urlApi}/devto/${idPost}.json`
    console.log(url)
    fetch(url).then((answ)=>answ.json())
    .then((body)=>{
        const posts=Object.keys(body).map((post)=>{
         //   console.log(body[post])
           // body[post].find((obd)=>obd==idPost)
        })
        //console.log(Object.keys(body).map)
    })
}

postMain()