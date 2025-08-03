// console.log("erorr handling")
// try {
//     x=12
//     console.log(x)
// } catch (error) {
//    throw new Error("x ko definde karo") 
// }
// finally{
//     console.log("progrma finish")
// }

let p=new Promise((a,r)=>{
    let car=fetch("https://fakestoreapi.in/api/products");
    if(car){
        car.then((e)=>{
         a(e.json())
        })
        
    }
    else{
        r("reject")
    }
})
// console.log(p)
p.then((e)=>{
    // console.log(e) 
    let data=e.products;
    data.map((e)=>{
        console.log(e)
   
let shirt =document.getElementById("cloth")
shirt.innerHTML=data.map((obj)=>{
    return `

    <div style="height: 600px; width: 500px; border: 4px solid red;  display: flex;
    
    flex-direction: column; align-items: center; background-color: aquamarine;" id="inner">
             <h3>title:${obj.title}</h3>
            <p>Brand:${obj.brand}</p>
             <p>category:${obj.category}</p>
              <p>color:${obj.color}</p>
             
           
            <img src="${obj.image}" alt="img" height="100px">
             <p>model:${obj.model}</p>
            <h3>Price:${obj.price}</h3>
            <button onclick=Addproduct(${obj.price})>ADD</button>
            <button onclick=Removeproduct(${obj.price})>Remove</button>
        </div>
    
    
    `
}).join("    ")

 })
})

let cart=document.getElementById("cart")
let price=0;
window.Addproduct=(p,i)=>{
    price=price+p;
    cart.innerHTML=price;
    
}
window.Removeproduct=(p)=>{
    price=price-p;
    cart.innerHTML=price;
}