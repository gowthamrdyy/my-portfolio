 document.getElementById('scroll-button').addEventListener('click', () => {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });
  
  // Add a smooth fade-in effect for when the page loads
  window.addEventListener('load', () => {
      document.body.classList.add('loaded');
  });
  
  // Optional: Add a subtle mouse hover effect
  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseover', () => {
          link.style.transform = 'scale(1.1)';
      });
      link.addEventListener('mouseout', () => {
          link.style.transform = 'scale(1)';
      });
  });
    // Filtering Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Highlight the active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/hide projects based on filter
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Smooth Scroll for Navigation (if implemented)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
