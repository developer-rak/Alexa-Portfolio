/*==MENU SHOW Y HIDDEN==*/
const navMenu = document.getElementById("nav-menu"),
   navToggle = document.getElementById("nav-toggle"),
   navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add('show-menu')
   });
}
// MENU HIDDEN
if (navClose) {
   navMenu.addEventListener("click", () => {
      navMenu.classList.remove('show-menu')
   });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   // when we click on each nav_link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*==SKILLS==*/
const skillsContent = document.getElementsByClassName('skills_content'),
   skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
   let itemClass = this.parentNode.className

   for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills_content skills_close'
   }
   if (itemClass === 'skills_content skills_close') {
      this.parentNode.className = 'skills_content skills_open'
   }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', toggleSkills)
})

/*==QUALIFICATION TABS==*/
const tabs = document.querySelectorAll('[data-target]'),
   tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
         tabContent.classList.remove('qualification_active')
      })
      target.classList.add('qualification_active')

      tabs.forEach(tab => {
         tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
   })
})

/*==SERVICES MODAL==*/
const modalViews = document.querySelectorAll('.services_modal'),
   modalBtn = document.querySelectorAll('.services_button'),
   modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
   modalViews[modalClick].classList.add('active-modal')
}

modalBtn.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
      modal(i)
   })
})

modalCloses.forEach((modalClose) => {
   modalClose.addEventListener('click', () => {
      modalViews.forEach((modalView) => {
         modalView.classList.remove('active-modal')
      })
   })
})

/*==PORTFOLIO SWIPER==*/
let swiper = new Swiper(".portfolio_container", {
   cssMode: true,
   loop: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

/*==TESTIMONIAL SWIPER==*/
let swiperTestimonial = new Swiper(".testimonial_container", {
   loop: true,
   grabCursor: true,
   spaceBetween: 48,

   //    // navigation: {
   //    //    nextEl: ".swiper-button-next",
   //    //    prevEl: ".swiper-button-prev",
   // },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   breakpoints: {
      568: {
         slidesPerView: 2,
      }
   }
});

/*==SCROLL SECTION ACTIVE LINK==*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
         document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)