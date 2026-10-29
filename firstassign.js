let arr = ["https://plus.unsplash.com/premium_photo-1767740460451-dd22f4f9fa7a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D","https://images.unsplash.com/photo-1792976755752-4b60c9460041?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"]
let img = document.querySelector("img")
let n=0;
setInterval(()=>{
    img.setAttribute('src',arr[n])
    n=(n+1)%arr.length
},1000)