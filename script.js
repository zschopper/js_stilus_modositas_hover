window.addEventListener("load", init);

function init() {
    const imgs = document.querySelectorAll("img");
    for (let img of imgs) {
        img.addEventListener("mouseenter", mouseenter);
        img.addEventListener("mouseleave", mouseleave);
        img.style.border = "0px none";
        img.style.padding = "10px";
    }
}

function mouseenter(event) {
    event.target.style.border = "5px solid red";
    event.target.style.padding = "10px";
}

function mouseleave(event) {
    event.target.style.border = "0px none";
    event.target.style.padding = "15px";
}