window.onload = function() {
    // Simulate loading delay
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").classList.remove("hidden");
    }, 2000); // Adjust the delay as needed
  };
  
  // Load content as you scroll
  window.onscroll = function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };
  