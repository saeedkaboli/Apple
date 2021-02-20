var El={
    body:document.querySelector("body"),
    All:document.getElementById("All"),
    back:document.getElementById("bg"),
    mob:document.getElementById("mobail"),
    Con:document.getElementById("con"),
    mtn:document.querySelector("article"),
    header:document.getElementById("header"),
    container:document.getElementById("content")
    
}
let x=0;
let y=x-10;
function sc(){
var m=El.container.style.top=`${--y}px`;
if(m==`-350px`){
  return y=0;
}
console.log(y);
}
