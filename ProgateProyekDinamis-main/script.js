// CODING UNTUK SLIDER

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
};

showSlide(slideIndex);

// CODING UNTUK MODAL

let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// Image and Caption 1
var img1 = document.getElementById("img1");
var modalImg1 = document.getElementById("image1");
var captionText1 = document.getElementById("caption1");

img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
};

// Image and Caption 2
var img2 = document.getElementById("img2");
var modalImg2 = document.getElementById("image2");
var captionText2 = document.getElementById("caption2");

img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

// Image and Caption 3
var img3 = document.getElementById("img3");
var modalImg3 = document.getElementById("image3");
var captionText3 = document.getElementById("caption3");

img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};

// Image and Caption 4
var img4 = document.getElementById("img4");
var modalImg4 = document.getElementById("image4");
var captionText4 = document.getElementById("caption4");

img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeModal1")[0];
var span2 = document.getElementsByClassName("closeModal2")[0];
var span3 = document.getElementsByClassName("closeModal3")[0];
var span4 = document.getElementsByClassName("closeModal4")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

span3.onclick = function () {
  modal3.style.display = "none";
};

span4.onclick = function () {
  modal4.style.display = "none";
};

// CODING UNTUK VALIDATION

const checking = () => {
  var email = document.getElementById("emailbox").value;
  var message = document.getElementById("messagebox").value;

  if (email !== "" && message !== "") {
    alert("Terima Kasih Pesan Anda Telah Diterima!");
  } else {
    alert("Anda Harus Mengisi Data Dengan Lengkap!");
  }
};

// CODING UNTUK ACCORDION

const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
