function setActive(index) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, i) => {
      if (i === index) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  