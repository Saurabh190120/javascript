let v=0
function increment() {
    v++
    document.getElementById('count').innerHTML=v
    if(v%2==0){
         document.getElementById('count').style.color="red"
    }
    else{
    document.getElementById('count').style.color="black"
    }}
function decrement() {
    if(v>0){
    v--
    document.getElementById('count').innerHTML=v
   if(v%2==0){
         document.getElementById('count').style.color="red"
    }
    else{
    document.getElementById('count').style.color="black"
    }
}}

function reset() {
    v=0
    document.getElementById('count').innerHTML=v
    if(v==0){
         document.getElementById('count').style.color="black"
    }
}

function hower() {
  document.getElementById('hower').textContent="Saurabh"  
}
function how() {
     document.getElementById('hower').textContent="hower on me"  
}