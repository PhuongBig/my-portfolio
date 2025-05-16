// Create the Back to Top button element
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '&uarr;'; // You can use text or an icon
backToTopButton.setAttribute('id', 'back-to-top');
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.setAttribute('title', 'Back to top');

// Add the button to the body
document.body.appendChild(backToTopButton);

// CSS for the button (can also be in your style.css)
const style = document.createElement('style');
style.textContent = `
  #back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2563eb;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  #back-to-top:hover {
    background-color: #1d4ed8;
    transform: translateY(-3px);
  }

  #back-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
`;
document.head.appendChild(style);

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Show after scrolling 300px
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // For older browsers that don't support smooth scroll
  // (Optional fallback)
  if ('scrollBehavior' in document.documentElement.style === false) {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
});