var header = document.getElementById("header");

function onScroll() {
    if (window.scrollY > 0) { 
        header.style.backgroundColor = "rgba(43, 61, 80, .85)"; 
    } else {
        header.style.backgroundColor = "transparent";
    }
}

window.addEventListener("scroll", onScroll);