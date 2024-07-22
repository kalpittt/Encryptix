const aboutUsSection = document.querySelector('.about-us');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const aboutUsTop = aboutUsSection.offsetTop;
  const aboutUsHeight = aboutUsSection.offsetHeight;

  // Animate the About Us section on scroll
  if (scrollY > aboutUsTop - window.innerHeight / 2 && scrollY < aboutUsTop + aboutUsHeight) {
    aboutUsSection.classList.add('fade-in');
  } else {
    aboutUsSection.classList.remove('fade-in');
  }
});
