// Degree Navigation (used degree name as sticky nav title)
// https://steinhardt.nyu.edu/degree/otd-occupational-therapy-professional
// https://steinhardt.nyu.edu/degree/otd-occupational-therapy-professional/how-apply
// https://steinhardt.nyu.edu/degree/otd-occupational-therapy-professional/fieldwork-and-capstone

// Console script to insert nav-title div and add functionality
(function () {
  // Find the secondary nav element
  const secondaryNav = document.querySelector('nav.secondary-nav');

  if (secondaryNav) {
    // Create the nav-title div
    const navTitleDiv = document.createElement('div');
    navTitleDiv.className = 'nav-title';
    navTitleDiv.textContent = 'OTD Occupational Therapy Professional';

    // Insert as first child
    secondaryNav.insertBefore(navTitleDiv, secondaryNav.firstChild);

    // Add updated-nav class to body
    document.body.classList.add('updated-nav');

    console.log('Successfully inserted nav-title div as first child of secondary-nav and added updated-nav class to body');
  } else {
    console.error('Secondary nav element not found');
  }

  // Create the CSS styles
  const cssStyles = `
      .updated-nav .pre-content {
          position: sticky;
          z-index: 1000;
      }
          
      .updated-nav .pre-content.stuck-to-top {
          top: -1px;
          padding-top: 1px;
      }

      .updated-nav .secondary-nav__outer {
          background-color: #D2D5D0;
          border-bottom:1px solid #babbb9;
      }

      .updated-nav .secondary-nav__menu__link {
          color: #57068C;
          font-weight: 800;
      }

      .updated-nav .nav-title {
          display: none;
          color: #4A4F55;
          font-size: 13px;
          font-style: bold;
          font-weight: 700;
          line-height: 13px;
          text-transform: uppercase;
          padding-inline: 5px;
      }

      .updated-nav .secondary-nav {
          flex-direction: column;
          align-items: start;
      }

      .updated-nav .secondary-nav>ul svg.hover-down__icon {
          fill: #57068C;
      }

      .updated-nav .stuck-to-top .nav-title {
          display: block;
      }
  `;

  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.textContent = cssStyles;

  // Insert the style element into the head
  document.head.appendChild(styleElement);

  console.log('Successfully inserted nav-title CSS styles');

  // Add nav.js functionality
  console.log('nav.js loaded');
  const stickyElm = document.querySelector('.updated-nav .pre-content');
  if (!stickyElm) {
    console.log('Sticky element not found');
    return;
  }
  console.log('stickyElm', stickyElm);

  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('stuck-to-top', e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(stickyElm);

  console.log('Successfully added nav.js functionality to the page');
})();