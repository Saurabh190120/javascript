import cloth from "./ourproduct1.js";
// console.log(cloth)

let shirt =document.getElementById("cloth")

shirt.innerHTML=cloth.map((obj)=>{
    return `

    <div style="height: 200px; width: 200px; border: 4px solid red;">
             
            <p>Desc:${obj.desc}</p>
            <img src="${obj.img}" alt="img">
            <h3>Price:${obj.price}</h3>
            <button onclick=Addproduct(${obj.price})>ADD</button>
            <button onclick=Removeproduct(${obj.price})>Remove</button>
        </div>
    
    
    `
}).join("    ")
let cart=document.getElementById("cart")
let price=0;
window.Addproduct=(p)=>{
    price=price+p;
    cart.innerHTML=price;
}
window.Removeproduct=(p)=>{
    price=price-p;
    cart.innerHTML=price;
}
