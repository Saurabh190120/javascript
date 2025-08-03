let baseulr="http://localhost:3000/products"

const getallproduct=async()=>{
    try{
    let res=await fetch(baseulr)
      let data=await res.json()
      let product=document.getElementById("product")
      product.innerHTML=data.map((e)=>{
        return`
        <h1>id:${e.id} </h1>
         <h1>title:${e.title}</h1>
          <h1>price:${e.price} </h1>
        
        `
      })
    // console.log(res)
}
catch   (error){  
// alert(error)
}

}



const adddata=async(e)=>{
    // e.preventDefault();
let title =document.getElementById('title').value
let price=document.getElementById("price").value
    try {

        await fetch(baseulr,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,price})
        });









    } catch (error) {
        
    }
}


const updatedata=async(e)=>{
    // e.preventDefault();
    let  id=document.getElementById('id').value
 let title = await document.getElementById('utitle').value
let price = await document.getElementById("uprice").value

try {
    await fetch(`${baseulr}/${id}`,{

          method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,price})
 } )
 alert("update")
 getallproduct()

} 
catch (error) {
    console.log(error)
}


}

const deletedata=async(e)=>{
    // e.preventDefault();
    let  id=document.getElementById('did').value

try {
    await fetch(`${baseulr}/${id}`,{

          method:"DELETE",
           
 } )
 alert("DELETE")
 getallproduct()

} 
catch (error) {
    console.log(error)
}


}












