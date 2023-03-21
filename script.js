// MAIN IMAGE SOURCE HANDLING
const mainImage = document.querySelector(".mainImage");
function updateBackgroundSrc(){
    if (window.innerWidth > 990){
        mainImage.src = "images/image-hero-desktop.png";
    } else{
        mainImage.src = "images/image-hero-mobile.png";
    }
}

updateBackgroundSrc();
window.addEventListener("resize", updateBackgroundSrc)



