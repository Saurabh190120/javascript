import product from "./ourproduct.js";

let prod=document.getElementById("prod");
// console.log(prod)

prod.innerHTML=product.map((e)=>{
    return`
    <div style="height:200px width:200px border: 2px solid black;">
    <h3>ID:${e.id}</h3>
    <img src="${e.image}" alt="image" height="100px" width="100px">
    <br>
    <strong> price:${e.price}</strong> 
    <br>
    <button onclick="ADD(${e.price})">ADD</button>
    <button onclick="SUB(${e.price})">SUB</button>
    </div>
    `
})
let p=0;
window.ADD=(price)=>{
    p=p+price
    alert(p)
}
window.SUB=(price)=>{
     p=p-price
    alert(p)
}