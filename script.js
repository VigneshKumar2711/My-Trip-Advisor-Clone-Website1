document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle functionality
  const menuIcon = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav');

  if (menuIcon && nav) {
    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('show-nav'); // Toggles a class to show/hide the menu
    });
  }

  // Search functionality
  const searchInputs = document.querySelectorAll('input[type="search"]');
  const searchButtons = document.querySelectorAll('button');

  if (searchInputs.length > 0 && searchButtons.length > 0) {
    searchButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const searchTerm = searchInputs[index]?.value.trim();
        if (searchTerm) {
          alert(`Searching for: ${searchTerm}`);
        } else {
          alert('Please enter a search term.');
        }
      });
    });
  }

  // Like functionality
  const likeIcons = document.querySelectorAll('.fa-heart');

  if (likeIcons.length > 0) {
    likeIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('liked');
        const isLiked = icon.classList.contains('liked');
        alert(isLiked ? 'Added to favorites!' : 'Removed from favorites.');
      });
    });
  }

  // Interactive links or buttons
  const interactiveLinks = document.querySelectorAll('.explore-image__s1 p a');

  if (interactiveLinks.length > 0) {
    interactiveLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Feature Coming Soon!');
      });
    });
  }
});
