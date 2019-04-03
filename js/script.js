/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background colour of the
// body


// Step 1: Decide which tags in HTML we want to use & save them as constants at the top of the page.
const bodyTag = document.querySelector("body");
// Step 2: Decide which user events i.e. click, scroll etc. we want to trigger our code on. Here we want to listen out for any scroll events on our page.
document.addEventListener("scroll", function() {
  // Do something when the page is scrolled
  // console.log("Page has been scrolled");

  // Step 3: Find out and store how far from teh top of the page the scrollbar is.

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // If the distance from top is greater than 1000px, do something.
  if (distanceFromTop > 1000) {
    // do this
    bodyTag.classList.add("brogue-active");
  } else {
    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4300) {
    bodyTag.classList.add("stationary-active");
  } else {
    bodyTag.classList.remove("stationary-active");
  }
});

// Lightbox
// When we click on an image, we want to show the lightbox.
// Inside the lightbox we want to show the image clicked on.
// When we click on the lightbox we want it to disappear.

// Step 1 : Decide which tags in HTML we want to use and save
// them in consts.


// Save all of our images into a constant - this will be a list of images.

const images = document.querySelectorAll("section img");
// Save the lightbox from our HTML inside a constant.
const lightbox = document.querySelector(".lightbox");
// Save the lightbox image from our HTML inside a constant
const lightboxImage = document.querySelector(".lightbox img");

// Let's look at what's saved in images
console.log(images);
// Our images constant contains a list of images. We want to add an event listener
// to all of them. To do this we add a loop. In JavaScript this is called a
// for each function. It looks through all of our images & applies the same code.
// Step 2: Add a click event listener to all of our images
images.forEach(image => {

  image.addEventListener("click", function() {
    console.log("image clicked!");
    //Step 3: Show the lightbox
    lightbox.classList.add("fadeIn");
    //Step 4: Show the right image
    // Save the img src attribute from the image we click on
    // The keyword "this" references the image we have clicked on.
    // - THIS image .getAttribute allows us to store an attribute.
    // WE want the src attriibute beecause it contains the image location.
    let imgSrc = this.getAttribute("src");
    console.log(imgSrc);
    // set the lightbox image src attribute to the one we saved.
    lightboxImage.setAttribute("src", imgSrc);
  });
});

// Step 4: when we click on the lightbox, remove the fadeIn class

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});