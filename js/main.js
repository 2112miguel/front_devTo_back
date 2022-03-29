const idPost= document.getElementById('idPost')
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";
const url=`${urlApi}/devto.json`

const buscarPost=(e)=>{
  const titleFind= e.target.value.toLowerCase()
  let pivo=0
  fetch(url).then((anws)=>anws.json())
  .then((body)=>{
    const keys=Object.keys(body).filter((obj)=>{
      console.log(body[obj].titlePost.toLowerCase().indexOf(titleFind.toLowerCase()))
    })
    const key=Object.values(body)
    const result = key.filter((obj)=>{
      return obj.titlePost.toLowerCase().indexOf(titleFind.toLowerCase())> -1
    })
    console.log(result)
  })
 
}

function plantillaPost(post,key) {
   // console.log(key)
    return (
        `
        <div class="d-flex justify-content-center">
          <div class="card">
            <a href="./post.html?id=${key}">
              <img src="${post.imgPost}" class="card-img-top" alt="${post.titlePost}">
            </a>  
            <div class="card-body">
              <div class="d-flex">
                <div class="d-flex profileImg me-1">
                  <img src="${post.authorImage}" class="border border-1 rounded-circle profileImg">
                </div>
                <div class="d-flex flex-column text-start w-100">
                  <div class="d-flex flex-column text-start">
                    <div>
                      <button type="button" class="btn text-start text-decoration-none buttonAuthor rounded text-nowrap p-0">
                        <span class="fs-6 text-start">${post.namePost}</span>
                      </button>
                    </div>
                    <span class="p-0 m-0 cardSmallText">${post.datePost}</span>
                  </div>
                  <a href="./post.html?id=${key}" class="titleLink my-2">
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
        `
    )
  }
 
  const apiDevto=()=>{
    
  }

 const createPost = ()=>{
    fetch(url).then((respuesta)=>respuesta.json())
    .then((body)=>{
      //let key=Object.keys(body)
      const keys= Object.keys(body)
      let i=0
      const apiJson=Object.keys(body).map(id=>{
        const card=plantillaPost(body[id],keys[i])
        idPost.insertAdjacentHTML('afterbegin',card)
        i++
      })
      
    })
 }

 const goPost=(idPost)=>{
   console.log('hace algo')
  window.local.assing(``)
 }
 createPost()
 
 