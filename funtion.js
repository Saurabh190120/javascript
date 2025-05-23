// function name(parameter) {
    
// }
//name(argument)

// function Demo() {
//     console.log("inside funtion")
// }
// Demo()
function Demo(a) {
    let c =a
    if(c%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
let inp= parseInt(prompt("enter number"))
Demo(inp)