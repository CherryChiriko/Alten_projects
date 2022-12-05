const ex = document.getElementById("ex");
const cont = document.getElementById("contain");
const btn = document.getElementById("btn");

ex.style.color="red";
let dark_theme = true; let timer = null;

function changeColor(){
  dark_theme? ex.style.color="black": ex.style.color="red";
  dark_theme? contain.classList.replace('bg-dark', 'bg-white'): contain.classList.replace('bg-white', 'bg-dark');
  dark_theme = !dark_theme;
}

btn.onclick = () => {
  if (!timer){timer = setInterval(changeColor, 2000); btn.innerHTML = "Click to stop";}
  else {clearInterval(timer); timer=null; btn.innerHTML = "Click to change the color";}
}

const url = 'https://jsonplaceholder.typicode.com/'

// document.getElementById("commentBtn").onclick = ()=> {
//   fetch(`${url}comments/14`)
//     .then(response => response.json())
//     .then(json => {
//       document.getElementById("comment").innerHTML = `'${json.body}'`;
//       const id = json.postId;
//
//       fetch(`${url}users/${id}`)
//         .then(response => response.json())
//         .then(json => document.getElementById("author").innerHTML = json.name)
//     });
// }
// ---------------------------------------------------------------------------------

function loadJson(url) {  return fetch(url).then(response => response.json());}
// document.getElementById("commentBtn").onclick = ()=> {
//   loadJson(`${url}comments/14`)
//   .then(json =>  {
//       document.getElementById("comment").innerHTML = `'${json.body}'`;
//       return (loadJson(`${url}users/${json.postId}`));
//   })
//   .then(json => {
//     document.getElementById("author").innerHTML = `'${json.name}'`;
//   })
// }

// --------------------------------------------------------------------------------

document.getElementById("commentBtn").onclick = async ()=>{
  let json = await loadJson(`${url}comments/14`);
  document.getElementById("comment").innerHTML = `'${json.body}'`;
  let user = await loadJson(`${url}users/${json.postId}`);
  document.getElementById("author").innerHTML = `'${user.name}'`;
};

// --------------------------------------------------------------------------------
