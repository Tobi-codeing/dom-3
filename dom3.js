let boxes = document.getElementsByClassName("box")
console.log(boxes);
boxes[2].style.backgroundColor ="red"
// ismme box 3rd pe styles apply hoga


document.getElementById("red").style.backgroundColor ="green"
// isme jisko id diya hai uspe style apply hoga


document.querySelector(".box").style.backgroundColor = "aqua"
// iska same kaam hi hai but aalag style se


document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue"
})
