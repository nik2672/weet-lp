// hero section - fade in
document.addEventListener('DOMContentLoaded', function() {
  const heroText = document.querySelector('.hero-content');
  const heroImg = document.querySelector('.hero-image');
  
  // 0 opacity --> invisable, allows for fade-in
  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(30px)'; // text moves upward from thin air
  heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  
  heroImg.style.opacity = '0';
  heroImg.style.transform = 'translateX(30px)'; // phone moves right to left from thin air
  heroImg.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  heroImg.style.transitionDelay = '0.3s';
  
  // short delay, trigger fade-in
  setTimeout(() => {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
    
    heroImg.style.opacity = '1';
    heroImg.style.transform = 'translateX(0)';
  }, 300);
});


// feature section - icon hover
document.addEventListener('DOMContentLoaded', function() {
  const featureIcons = document.querySelectorAll('.feature-icon');
  
  featureIcons.forEach(icon => {
    icon.style.transition = 'transform 0.3s ease'; // 0.3 seconds upon hover
    
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.1)'; // 10% larger on hover
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)'; // removes effect on mouse leave
    });
  });
});

// how it works section - fade in
document.addEventListener('DOMContentLoaded', function() {

  // check if arg is in viewport 
  function isInViewport(element) {
    const rect = element.getBoundingClientRect(); // return object's properties (size and position)
    return (
      rect.top <= (window.innerHeight) * 0.8 && // 80% of viewport
      rect.bottom >= 0 // in viewport
    );
  }
  
  const steps = document.querySelectorAll('.step');
  
  // animation 
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    step.style.transitionDelay = `${index * 0.2}s`;
  });
  
  // animate each element when in view using isInViewport function
  function animateOnScroll() {
    steps.forEach(step => {
      if (isInViewport(step) && step.style.opacity === '0') {
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }
    });
  }
  
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});


// reveal animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  // check if element is in viewport
  function isInViewport(element, offset = 0.8) {
    const rect = element.getBoundingClientRect(); // return object's properties (size and position)
    return (
      rect.top <= (window.innerHeight) * offset && // 80% of viewport
      rect.bottom >= 0 // in viewport
    );
  }
  
  // select sections
  const sections = [
    { selector: '.features', delay: 0 },
    { selector: '.how-it-works', delay: 0 },
    { selector: '.faq', delay: 0 },
    { selector: '.download', delay: 0 }
  ];
  
  // animation for each section
  sections.forEach(section => {
    const element = document.querySelector(section.selector);
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      element.style.transitionDelay = `${section.delay}s`;
    }
  });
  
  // animate each section when in view using isInViewport function
  function animateSectionsOnScroll() {
    sections.forEach(section => {
      const element = document.querySelector(section.selector);
      if (element && isInViewport(element, 0.9) && element.style.opacity === '0') {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  animateSectionsOnScroll();
  window.addEventListener('scroll', animateSectionsOnScroll);
  


  // features section (Why choose Brik) section 
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(30px)';
    feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    feature.style.transitionDelay = `${index * 0.6}s`; //broken?
  });
  
  function animateFeaturesOnScroll() {
    const featuresSection = document.querySelector('.features');
    if (featuresSection && isInViewport(featuresSection, 0.8)) {
      features.forEach(feature => {
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
      });
    }
  }

  animateFeaturesOnScroll();
  window.addEventListener('scroll', animateFeaturesOnScroll);
});
