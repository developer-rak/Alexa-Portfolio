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

/*==CHANGE BACKGROUND HEADER==*/
function scrollHeader() {
   const nav = document.getElementById('header')

   if (this.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==SHOW SCROLL UP==*/
function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');

   if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ==DARK LIGHT THEME== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)

   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})