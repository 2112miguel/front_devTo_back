
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";
let postDat =  {namePost:'Madza', datePost:'Jun 25', imgLink: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gkqqTuyb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/159737/9f8f2a93-d0a1-4d77-a1f6-c3fc67ebde90.jpg',titlePost: '17 Killer Web Apps You Should Use to Increase Productivity 🚀', reactionsPost:'1177 reactions',commentsPost:'67 comments', timeReadP:'4 min read'}
let postData=[{auto: 'Ben Halperm',fecha:'Jun 27',linkFoto:'https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png',titula: `What's the most fun you've ever had coding?`, reacion:'17 reactions',comentario:'18 comments',time: '4 min read'}]

const crearPost =()=>{
  const url=`${urlApi}/devto.json`
  console.log(JSON.stringify(postDat))
  fetch(url,{
    method: 'POST',
    body : JSON.stringify(postDat),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then((respuesta)=>respuesta.json())
  .then((body)=>funcion(body))
  .catch((error)=>console.log(error))
}