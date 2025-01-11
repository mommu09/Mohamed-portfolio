const menu = document.querySelector('.menu-btn');
const menuList = document.querySelector('nav');
const icon = document.querySelector('.icon');
const links = document.querySelectorAll('nav ul li a');
menu.addEventListener('click', () => {
  if (menuList.style.left === '0px') {
    menuList.style.left = '-100dvw';
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
    icon.style.color="white";
  } else {
    menuList.style.left = '0px';
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    icon.style.color="crimson";
  }
});

// links.addEventListener('click', () => {
//   menuList.style.left='-100dvw';
//   icon.classList.add('fa-bars');
//   icon.classList.remove('fa-xmark');
//   icon.style.color="white";
// });

links.forEach(function(link) {
  link.addEventListener('click', () => {
    menuList.style.left = '-100dvw';
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
    icon.style.color = "white";
  });
});


function checkSectionInView() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links');
  const footer = document.querySelector('footer');

  let mostVisibleSectionIndex = -1;
  let maxVisibility = 0;

  // Remove 'nav-active' class from all nav links first
  navLinks.forEach(link => link.classList.remove('nav-active'));

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Calculate the visible height of the section within the viewport
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

    // Calculate the total height of the section
    const sectionHeight = rect.height;

    // Calculate the percentage of the section visible in the viewport
    const visibility = visibleHeight / sectionHeight;

    // If this section is more visible than the previous one, update the most visible section
    if (visibility > maxVisibility) {
      maxVisibility = visibility;
      mostVisibleSectionIndex = index;
    }
  });

  // Check if the footer is visible in the viewport
  const footerRect = footer.getBoundingClientRect();
  const footerVisible = footerRect.top <= window.innerHeight && footerRect.bottom > 0;

  // If the footer is visible, set the 5th section active
  if (footerVisible) {
    mostVisibleSectionIndex = sections.length - 1; // Set to last section (5th section)
  }

  // If a section is most visible, apply the nav-active class to its corresponding link
  if (mostVisibleSectionIndex !== -1) {
    navLinks[mostVisibleSectionIndex].classList.add('nav-active');
  }
}

// Listen to the scroll event
window.addEventListener('scroll', checkSectionInView);

// Initialize by checking if any section is in view when the page loads
document.addEventListener('DOMContentLoaded', checkSectionInView);
