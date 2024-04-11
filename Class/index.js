let btn1 = document.getElementById("p1-btn")
btn1.addEventListener("click", function () {
    let div1 = document.getElementById("text");
    div1.style.color = "red";
})

let btn2 = document.getElementById("p2-btn");
btn2.addEventListener("click", function () {
    let div2 = document.getElementById("color-div");
    div2.style.width = parseInt(div2.clientWidth) + 20 + "px";
})

let btn3 = document.getElementById("p3-btn");
btn3.addEventListener("click", function () {
    let flex = document.getElementById("flex-div");
    flex.style.justifyContent = "space-between";
})