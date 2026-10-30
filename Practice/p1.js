let show = document.querySelector("h1");
let inc = document.querySelector("#increase")
let dec = document.querySelector("#decrease")
let num = 0;
inc.onclick=function(){
    num++
    show.innerText=num
}
dec.onclick=function(){
    if(num==0){
        show.innerText="0"
    } else{
        num--
        show.innerText=num
    }
}