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