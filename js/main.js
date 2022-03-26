const idPost= document.getElementById('idPost')

function plantillaPost(post) {
    
    return (
        `<article class="d-flex flex-column  bd-highlight">
        <a href="" class="imgPost"></a>
        <div class="cardPost mb-3 mt-0 pt-0" style="height: 231px;">
          <article class="card-body pt-0 mt-0 d-flex flex-column">
            <!--img perfil y botones-->
            <section class="d-flex flex-row">
              <a href="#" class="profileImg align-self-center" style="background-image: url(${post.imgLink});"></a>
              <article class="d-flex flex-column">
                <div type="button" class="btn btn-outline-light btn-xs text-dark">
                  ${post.namePost}
                </div>
                <div type="button" class="btn btn-outline-light btn-xs text-dark">
                  <small>${post.datePost} </small> 
                </div>
              </article>
            </section>                        
            <a href="" class="text-dark text-decoration-none mb-0">
                <h4 class="font-weight-bold">
                  ${post.titlePost}
                </h4>
            </a>
            <div class="d-flex flex-row bd-highlight mb-0 mt-0">
              <button type="button" class="btn btn-light">#webdev</button>
              <button type="button" class="btn btn-light">#productivity</button>
              <button type="button" class="btn btn-light">#css</button>
            </div>
            <section class="d-flex pt-0 align-items-center">
              <div class="p-2 flex-grow-1 bd-highlight">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                      ${post.reactionsPost}
                </a>
              </div>
              <div class="p-2 flex-grow-1 bd-highlight">
                  <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                        ${post.commentsPost}
                  </a>
              </div>
              <div class="p-2 bd-highlight"><p class="card-text"><small class="text-muted">${post.timeReadP}</small></p></div>
              <div class="p-2 bd-highlight"><button type="button" class="btn btn-light">Save</button></div>
            </section>
          </article>  
        </div>                                                  
      </article>`
    )
  }

  //https://res.cloudinary.com/practicaldev/image/fetch/s--gkqqTuyb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/159737/9f8f2a93-d0a1-4d77-a1f6-c3fc67ebde90.jpg
  //const objPost = new postInfo()

 // objPost.imgLink = 'https://res.cloudinary.com/practicaldev/image/fetch/s--gkqqTuyb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/159737/9f8f2a93-d0a1-4d77-a1f6-c3fc67ebde90.jpg'
 // console.log(objPost.imgLink)

function Post(
    namePost,
    datePost,
    imgLink,
    titlePost,
    tagsPost,
    reactionsPost,
    commentsPost,
    timeReadP) {
        
        this.namePost= namePost;
        this.datePost =datePost;
        this.imgLink = imgLink;
        this.titlePost = titlePost;
        this.tagsPost= tagsPost;
        this.reactionsPost=reactionsPost;
        this.commentsPost=commentsPost;
        this.timeReadP =timeReadP
    
  }
  
  let postDat = [ 
      ['Madza','Jun 25', 'https://res.cloudinary.com/practicaldev/image/fetch/s--gkqqTuyb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/159737/9f8f2a93-d0a1-4d77-a1f6-c3fc67ebde90.jpg','17 Killer Web Apps You Should Use to Increase Productivity 🚀','#webdev','1177 reactions','67 comments','4 min read'],
      ['Ben Halperm','Jun 27','https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png',`What's the most fun you've ever had coding?`,'#discuss','17 reactions','18 comments','4 min read']
 ]

 const createPost = ()=>{
  let post= []

  for(let i=0;i<postDat.length;i++){
    //for(let j=0;j<postDat[i].length;j++) 
    post[i] = new Post(postDat[i][0],postDat[i][1],postDat[i][2],postDat[i][3],postDat[i][4],postDat[i][5],postDat[i][6],postDat[i][7])
    console.log(post[i])
    idPost.innerHTML=plantillaPost(post[i])
    //post[i] = new Post(postDat[i][0],postDat[i][1],postDat[i][2],postDat[i][3],postDat[i][4],postDat[i][5],postDat[i][6],postDat[i][7])
  }

  
 }

 createPost()
  