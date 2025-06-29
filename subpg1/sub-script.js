// backGround z-index switch 
$(window).on('load', function () {
  setTimeout(function () {
    $('#particles').css('z-index', '-1'); // or any new value
  }, 1500); // delay in milliseconds
});


// navigation section animation start --------------
// humberger menu 
let menuOpen = false;

function slideMenu(){
    $('#nav-icon4').toggleClass('open');

    if (!menuOpen) {
      $('#nav-menu').animate({ left: '0%' });
    } else {
      $('#nav-menu').animate({ left: '-100%' }); // slide back off screen
    }

    menuOpen = !menuOpen;
  }

$(document).ready(function(){
  $('#nav-icon4').click(slideMenu);
});

// updating header height onn rotation and 
let headerHeight;
function updateHeaderHeight() {
  headerHeight = $(window).width() < 600 ? 0 : 80;
}
$(document).ready(function () {
  // Initial calculation on page load

  updateHeaderHeight();

  // Update on resize (e.g., phone rotation)
  $(window).on('resize orientationchange', function () {
    updateHeaderHeight();
  });
});

function goto(location){
  sessionStorage.setItem("scrollTarget", location);
  window.location.href = "../index.html";
}

// profile slide menu and head bar 
$(document).ready(function () {
  $("#goToProfile").click(function(){
    goto("#profile");
    slideMenu();
  });

  $("#goToProfile2").click(function(){
    goto("#profile");
  });
});

// skill slide menu and head bar 
$(document).ready(function () {
  $("#goToSkill").click(function(){
    goto("#skill");
    slideMenu();
  });

  $("#goToSkill2").click(function(){
    goto("#skill");
  });
});

//portfolio slide menu and head bar 
$(document).ready(function () {
  $("#goToPortfolio").click(function () {
    goto("#portfolio")
    slideMenu();
  });
  $("#goToPortfolio2").click(function(){
    goto("#portfolio")
  });
});

// certificate slide menu and head bar 
$(document).ready(function () {
  $("#goToCertificate").click(function(){
    goto("#certificate")
    slideMenu();
  });

  $("#goToCertificate2").click(function(){
    goto("#certificate")
  });
});

// work slide menu and head bar 
$(document).ready(function () {
  $("#goToWork").click(function(){
    goto("#work")
    slideMenu();
  });

  $("#goToWork2").click(function(){
    goto("#work")
  });
});

// contact slide menu and head bar 
$(document).ready(function () {
  $("#goToContact").click(function(){
    goto("#contact")
    slideMenu();
  });

  $("#goToContact2").click(function(){
    goto("#contact")
  });
});
//---------------------navigation ending---------------------


// scroll to the top of the page button 
$(document).ready(function () {
  // Show the button when scrolled down 200px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });

  // Click to scroll to top
  $('#scrollTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600); // 600ms = 0.6s
    return false;
  });
});
