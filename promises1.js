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
        console.log(e.id)

         })
})