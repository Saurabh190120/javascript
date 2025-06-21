let create_btn=document.getElementById('create')
//console.log(create_btn)
let read_btn=document.getElementById('read')
//console.log(read_btn)
let update_btn=document.getElementById('update')
//console.log(update_btn)
let delete_btn=document.getElementById('delete')
//console.log(delete_btn)
let create_form = document.getElementById('inner1')
let update_form = document.getElementById('inner3')
let delete_form = document.getElementById('inner4')
const handleadd=()=>{
    let x=document.getElementById('insert_array').value;
    console.log(x)
    arr.push(x)
     Object.assign(create_form.style,{
        left:'-100%',
         top:'30vh'
    })
   
}
let arr=[];
create_btn.addEventListener('click',function(){
    Object.assign(create_form.style,{
        left:'0%',
        top:'30vh'
    })
   
})
read_btn.addEventListener('click',function(){
    let data=document.getElementById('inner2')
    let data1=arr.map((e)=>{
        return e
    })
    if(data1.length==-1){
        data.innerHTML="<h1>no element</h1>"
    }
    else{
        data.innerHTML=data1;
    }
})

const  handleupdate=()=>{
    let data=document.getElementById('findupdate').value;
    let ind=arr.findIndex((e)=>e===data)
    let data2=document.getElementById('updateele').value;
    console.log(ind)
    if(ind==-1){
        alert("not found")
    }
    else{
        arr[ind]=data2;
    }
     Object.assign(update_form.style,{
        left:'-100%',
         top:'30vh'
    })

}
update_btn.addEventListener('click',function(){
    Object.assign(update_form.style,{
        left:'0%',
         top:'30vh'
    })
   
})
const  handledelete=()=>{
    let data=document.getElementById('finddelete').value;
    let ind=arr.findIndex((e)=>e===data)
    
    console.log(ind)
    if(ind==-1){
        alert("not found")
    }
    else{
        arr.splice(ind,1)
    }

}
delete_btn.addEventListener('click',function(){
   Object.assign(delete_form.style,{
        left:'0%',
         top:'30vh'
    })
})