// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle for phone view
  const menuIcon = document.querySelector('.fa-bars');
  const nav = document.querySelector('.nav');
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
  });

  // Search functionality
  const searchInputs = document.querySelectorAll('input[type="search"]');
  const searchButtons = document.querySelectorAll('button');

  searchButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const searchTerm = searchInputs[index].value.trim();
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // Optionally, redirect or fetch data based on the search term
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      } else {
        alert('Please enter a search term.');
      }
    });
  });

  // Interactive 'Try it' button for AI trip builder
  const tryItButton = document.querySelector('.try-it-button');
  tryItButton.addEventListener('click', () => {
    alert('AI Trip Builder Coming Soon!');
  });

  // Like functionality for travel creators and liked places
  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('liked');
      if (icon.classList.contains('liked')) {
        alert('Added to favorites!');
      } else {
        alert('Removed from favorites.');
      }
    });
  });

  // Explore image link interactivity
  const exploreLinks = document.querySelectorAll('.explore-image__s1 p a');
  exploreLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Feature Coming Soon!');
    });
  });

  // More to explore carousel (basic example)
  let exploreIndex = 0;
  const exploreImages = document.querySelectorAll('.explore-image__s1 img');
  const nextExploreBtn = document.querySelector('.fa-circle-arrow-right');

  if (nextExploreBtn) {
    nextExploreBtn.addEventListener('click', () => {
      exploreImages[exploreIndex].classList.remove('active');
      exploreIndex = (exploreIndex + 1) % exploreImages.length;
      exploreImages[exploreIndex].classList.add('active');
    });
  }

  // Highlight reviews on hover
  const reviewElements = document.querySelectorAll('.liked-place-image__s1');
  reviewElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.border = '2px solid #00b894';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = 'none';
    });
  });
});
