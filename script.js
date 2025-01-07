document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle functionality
  const menuIcon = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav');

  if (menuIcon && nav) {
    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('show-nav'); // Toggles a class to show/hide the menu
    });
  }

  // Dynamic Search Functionality
  const searchInput = document.querySelector('#search-box');
  const searchButton = document.querySelector('#search-btn');
  const itemList = document.querySelectorAll('.item'); // Example: items to filter

  if (searchInput && searchButton && itemList.length > 0) {
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();

      if (query) {
        itemList.forEach((item) => {
          const itemText = item.textContent.toLowerCase();
          if (itemText.includes(query)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      } else {
        alert('Please enter a search term.');
      }
    });
  }

  // Liking Items (Add to Favorites)
  const likeButtons = document.querySelectorAll('.fa-heart');

  if (likeButtons.length > 0) {
    likeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('liked'); // Adds a "liked" style
        const isLiked = button.classList.contains('liked');
        button.setAttribute('aria-label', isLiked ? 'Unlike' : 'Like');
        alert(isLiked ? 'Added to favorites!' : 'Removed from favorites.');
      });
    });
  }

  // View Details / Explore Button
  const exploreButtons = document.querySelectorAll('.explore-btn'); // Buttons to explore items

  if (exploreButtons.length > 0) {
    exploreButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id'); // Get item's unique ID
        alert(`Navigating to details of item: ${itemId}`);
        // Replace the above with redirection logic or modal opening
      });
    });
  }

  // Dynamic Image Slider (if applicable)
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  if (slider && slides.length > 0) {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const updateSlide = (index) => {
      slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
      });
    };

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
      });

      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
      });
    }

    updateSlide(currentSlide); // Initialize slider
  }

  // Responsive Footer Interactions (Optional)
  const footerLinks = document.querySelectorAll('.footer-link');

  if (footerLinks.length > 0) {
    footerLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        alert(`Navigating to: ${link.textContent.trim()}`);
      });
    });
  }
});
