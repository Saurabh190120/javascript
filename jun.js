function handleinput(){
    let x=document.getElementById('clr').value;
    console.log(x);
    document.body.style.backgroundColor=x;
    document.getElementById("res").innerHTML=x

    
}

function handlecalc(){
    let x=document.getElementById("calc").value;
    let y=eval(x)
    document.getElementById('calc').value=y;
    // document.getElementById('res1').innerHTML=y;
    console.log(eval(x));  
    
}