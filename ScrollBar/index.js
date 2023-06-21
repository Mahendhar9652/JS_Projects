// var scrollLinks = document.getElementsByClassName('scroll-link');
//   var nav = document.getElementById('nav');

//   for (var i = 0; i < scrollLinks.length; i++) {
//     scrollLinks[i].addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent default anchor behavior
//       var target = this.getAttribute('href'); // Get the target section ID
//       // Add 'after-nav' class to the navbar when 'About' or 'Services' link is clicked
//       if (target === '#about' || target === '#services') {
//         nav.classList.remove('nav')
//         nav.classList.add('after-nav');
//       } else {
//         nav.classList.remove('after-nav');
//         nav.classList.add('nav')
//       }
//     });
//   }