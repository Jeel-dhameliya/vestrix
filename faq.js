// FAQ accordion functionality
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      this.classList.toggle('active');
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}); 