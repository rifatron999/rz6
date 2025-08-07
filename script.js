// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('RoNZar website loaded successfully!');
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only apply smooth scroll for hash links
      if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for header
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add animation to cards when they come into view
  const animateOnScroll = function() {
    const cards = document.querySelectorAll('.card, .step-card, .module-card, .domain-card, .tech-card');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.classList.add('animate');
      }
    });
  };
  
  // Run animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on page load
  animateOnScroll();
  
  // Demo button functionality
  const demoButton = document.querySelector('.qr-example .button');
  if (demoButton) {
    demoButton.addEventListener('click', function() {
      alert('QR Code Demo: This would open a mobile-friendly menu in a real implementation.');
    });
  }
});