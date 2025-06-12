// Bar animation when in viewport
document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skill-item');

  const animateBars = () => {
    skillItems.forEach(item => {
      const inner = item.querySelector('.skill-bar-inner');
      if(inner) {
        const level = item.getAttribute('data-level');
        inner.style.width = level + '%';
      }
    });
  };

  // Simple trigger when loaded (can add IntersectionObserver for advanced usage)
  setTimeout(animateBars, 350);
});