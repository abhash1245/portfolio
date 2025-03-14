// Smooth scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Optional: Add more animations or interactivity here
  // Example: Fade-in effect on scroll
  document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
      }
    });
  });