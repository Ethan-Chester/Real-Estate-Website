const pageTransition = document.querySelector('.page-transition');
const contactButton = document.getElementById("contact-button")

function addCoverEffectEventListeners() {
  
  document.querySelectorAll('a.clickable').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = e.currentTarget.href;

      if (targetUrl === window.location.href) {
        e.preventDefault();
      }
      
      e.preventDefault();
      pageTransition.style.transform = 'translateX(0%)';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 700);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  
  setTimeout(() => {
    pageTransition.style.transform = 'translateX(100%)';
  }, 700);

  addCoverEffectEventListeners();
});


contactButton.addEventListener('click', function(){
  const newPageUrl = 'about.html'

  
  pageTransition.style.transform = 'translateX(0%)';

  setTimeout(() => {
    window.location.href = newPageUrl;
  }, 700);
})

