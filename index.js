const buttons = document.querySelector(".ripple")

buttons.addEventListener("click", rippleEffect)


function rippleEffect (e) {
// getting offset  at any point clicked to x and y coordinate  // 
const x = e.clientX
const y = e.clientY

//getting offset of the button 
const buttonLeft = e.target.offsetLeft
const buttonTop = e.target.offsetTop

// getting the difference between the point where cusor is and the edge of the button
const insideX = x - buttonLeft
const insideY = y - buttonTop

const square = document.createElement("span");
square.classList.add("square");
square.style.top =`${insideY}px`
square.style.left =`${insideX}px`


buttons.appendChild(square)
setTimeout(() => square.remove(), 500)
}