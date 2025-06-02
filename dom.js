let h = document.getElementById('head')

h.textContent="saurabh"


h.innerHTML = "<i> Bhai </i>"

h.style.color="red"
h.style.backgroundColor="blue"
h.style.padding="20px"

h.style.cssText="background-color:yellow;padding:20px"

let list = document.getElementsByTagName('li')
//array list = [li,li,li,li]
list[1].style.backgroundColor="tomato"

h.setAttribute('align','center')

document.body.removeAttribute('bgcolor')

document.getElementById('image').src="assign.jpg"
document.getElementById('image').setAttribute('width','100%')