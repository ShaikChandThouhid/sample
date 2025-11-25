


function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}



//tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!");

  const buttons = document.querySelectorAll(".nav-item button");
  const panes = document.querySelectorAll(".tab-pane");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      buttons.forEach(btn => btn.classList.remove("active"));
      panes.forEach(pane => pane.classList.remove("active"));


      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});


//sliding animation

// const carousel = document.getElementById("carousel");

// carousel.addEventListener("mouseenter", () => {
//   carousel.style.animationPlayState = "paused";
// });

// carousel.addEventListener("mouseleave", () => {
//   carousel.style.animationPlayState = "running";
// });


//accordion functionality
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

  
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

 
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});



//custom accordian
document.querySelectorAll('.custom-accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const icon = header.querySelector('.custom-accordion-icon');

    item.classList.toggle('active');

    // Change icon
    if (item.classList.contains('active')) {
      icon.src = '/assets/minus.png';
    } else {
      icon.src = '/assets/plus.png';
    }
  });
});


//owl coursel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
});

//job-card
function toggleJob(id) {
  const allDetails = document.querySelectorAll(".job-detail");
  allDetails.forEach(detail => {
    if (detail.id === id) {
      detail.classList.toggle("active");
    } else {
      detail.classList.remove("active");
    }
  });
}


