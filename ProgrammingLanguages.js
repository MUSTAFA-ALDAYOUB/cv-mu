document.addEventListener('DOMContentLoaded', function() {
  const langCards = document.querySelectorAll('.language-card');

  setTimeout(() => {
    langCards.forEach(card => {
      const inner = card.querySelector('.language-bar-inner');
      if(inner) {
        const level = card.getAttribute('data-level');
        inner.style.width = level + '%';
      }
    });
  }, 250);
});