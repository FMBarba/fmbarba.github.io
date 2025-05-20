document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a[href^='#']");

  function activateLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkHash = new URL(link.href).hash;
      if (linkHash === `#${current}`) {
        console.log("Activating link:", linkHash); 
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLink);
});
