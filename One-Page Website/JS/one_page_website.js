// Select images
const images = document.querySelectorAll(".gallery-img");

// Modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Open modal
images.forEach(function(image){

    image.addEventListener("click", function(){

        modal.style.display = "block";

        modalImg.src = this.src;

        caption.innerHTML = this.alt;

    });

});

// Close modal
closeBtn.onclick = function(){

    modal.style.display = "none";

};

// Close if user clicks outside image
modal.onclick = function(event){

    if(event.target === modal){

        modal.style.display = "none";

    }

};