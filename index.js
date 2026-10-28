//BASICS
// var a =1;
// var a = 2;
// console.log(a);
// let b = 1;
// b = 2;
// console.log(b);
// const c = 1;
// console.log(c);
// console.log("5"-5);
// console.log("5"+5);
// console.log("hello"+5);

//SUM CALCULATOR
// var a = prompt("Enter frist number:");
// var b = prompt("Enter second number:");
// var sum = a+b;
// console.log("Sum is : "+sum)

//GRADING SYSTEM
// let a = prompt("Enter your marks :");
// let b;
// if(a>=75){
//     console.log("A");
//     let b = true;
// } else if((a<75 && a>=65)){
//     let b = true;
//     console.log("B");
// } else if((a<65 && a>=55)){
//     console.log("C");
//     let b = true;

// } else if((a<55 && a>=45)){
//     console.log("D");
//     let b = true;
// } else{
//     console.log("Fail");
//     let b = false;
// }

//EVEN ODD
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let even = 0;
// let odd = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         even++;
//     } else{
//         odd++;
//     }
// }
// console.log(even);
// console.log(odd);

//FOR IN/OF LOOP
// for(let i in arr){
//     console.log(i);
// }
// for(let i of arr){
//     console.log(i);
// }

//OBJECT
// let student={
//     name:"Akshat",
//     rolln:12,
//     class:11,
// }
// console.log(student.name);

//2D ARRAY
// let arr = [1,2,3,4,5,[6,7,8]];
// console.log(arr[5][1]);

//PATTERN PRINTING
// let n = 5;
// for(let i=1; i<5; i++){
//     let star=''
//     for(let j=1;j<=i;j++){
//         star=star+"*";
//     }
//     console.log(star);
// }

//RIGHT SIDE TRIANGLE
// let nsp=4;
// for(let i=1; i<5;i++){
//     let space="";
//     let star="";
//     for(let j=nsp;j>0;j--){
//         space=space+" ";
//     }
//     for(let j=1;j<=i;j++){
//         star=star+"*";
//     }
//     let main = space+star;
//     console.log(main)
//     nsp--;
// }

//PYRAMID
// let n=4;
// let nsp=n-1;
// let nst = 1;
// for(let i=1; i<=4; i++){
//     let space="";
//     let star="";
//     for(let j=nsp; j>0; j--){
//         space=space+" ";
//     }
//     for(let j=1; j<=nst;j++){
//         star=star+"*";
//     }
//     let final = space+star;
//     console.log(final);
//     nst+=2;
//     nsp--;
// }

//SHIFT UNSHIFT PUSH POP
// let arr = [1,2,3,4,5]
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);
// let array = [[1,2],[3,4]];
// console.log(array);
// array.push([5,6]);
// console.log(array);

//FUNCTIONS
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(4,2);

//FIND INDEX OF TARGET IN ARRAY FUNCTION
// function findindex(ar,tr){
//     let index = -1;
//     for(let i=0; i<ar.length; i++){
//         if(ar[i]==tr){
//             index = i;
//             break;
//         }
//     }
//     console.log(index);
// }
// let arr=[1,2,3,4,5,6,4];
// let target = 4;
// findindex(arr,target);

//TRIANGLE USING FUNCTION
// function tri(n){
//     for(let i=1; i<=n ; i++){
//     let star = "";
//         for(let j=1; j<=i; j++){
//             star+="🧿";
//         }
//         console.log(star);
//     }
// }
// let N = 7;
// tri(N);

//DIFFERENT FUNCTION
// let print=()=>{
//     console.log("hello")
// }
// print();