document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let heading2Elements = document.querySelectorAll('.heading2');
      let paragraph2Elements = document.querySelectorAll('.paragraph2');
  
      heading2Elements.forEach(function(heading2) {
        let triggerPosition = heading2.offsetTop - window.innerHeight + heading2.clientHeight / 2;
  
        if (window.scrollY > triggerPosition) {
          heading2.style.opacity = '1';
          heading2.style.transform = 'translateY(0)';
        } else {
          heading2.style.opacity = '0';
          heading2.style.transform = 'translateY(50px)';
        }
      });
  
      paragraph2Elements.forEach(function(paragraph2) {
        let triggerPosition = paragraph2.offsetTop - window.innerHeight + paragraph2.clientHeight / 2;
  
        if (window.scrollY > triggerPosition) {
          paragraph2.style.opacity = '1';
          paragraph2.style.transform = 'translateY(0)';
        } else {
          paragraph2.style.opacity = '0';
          paragraph2.style.transform = 'translateY(50px)';
        }
      });
    });
  });
  