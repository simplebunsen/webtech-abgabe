//change this when adding new pictures
const imagesCount = 6;

let slides = [];
let currentImage = 1;


function init() {
    slides[0] = document.getElementById("left-slide");
    slides[1] = document.getElementById("mid-slide");
    slides[2] = document.getElementById("right-slide");
    updateImages();
}

function updateImages(direction) {
    switch (direction) {
        case "left":
            currentImage = mod(currentImage-1, imagesCount);
            break;
        case "right":
            currentImage = mod(currentImage+1, imagesCount);
            break;

        default:
            break;
    }

    //offset for pictures shown to the left and right
    let foo = -1;
    slides.forEach(e => {
        e.querySelector(".gallery-image").src =  `/assets/gallery-images/image-${mod(currentImage + foo, imagesCount)}.png`;
        foo++;
    });
}

//proper modulo instead of remainder %
function mod(n, m) {
    return ((n % m) + m) % m;
  }