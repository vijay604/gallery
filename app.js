let scrollContainer = document.querySelector(".gallery");
let bcktn = document.getElementById("bcktn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});
nextbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})
bcktn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})