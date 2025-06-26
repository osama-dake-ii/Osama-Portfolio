// backGround z-index switch 
$(window).on('load', function () {
  setTimeout(function () {
    $('#particles').css('z-index', '-1'); // or any new value
  }, 1500); // delay in milliseconds
});

// humberger menu 
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

// banner text animation 
const typeWriterSpeed = 120;

$(window).on('load', function () {
  const text = "osama mohamed";
  let i = -14;

  function rm(){
    $('#typewriter').removeClass("blinking-animation");
    $('#typewriter').addClass("no-blinking-sign");
  };
  
  function typeWriter() {
    if (i < text.length) {
      const span = $('<span>').text(text.charAt(i)).css('opacity', 0);
      $('#typewriter').append(span);
      span.animate({ opacity: 1 }, 200); // fade in the new letter
      i++;
      setTimeout(typeWriter, typeWriterSpeed);
    } else{
      rm()
    }
  }
  typeWriter();
});

$(window).on('load', function () {
  const text = "portfolio";
  let i = -27;
  
  function typeWriter() {
    if (i < text.length) {
      const span = $('<span>').text(text.charAt(i)).css('opacity', 0);
      $('#typewriter2').append(span);
      span.animate({ opacity: 1 }, 200); // fade in the new letter
      i++;
      setTimeout(typeWriter, typeWriterSpeed);
    }
  }

  typeWriter();
});

// work history section animation 
$(document).ready(function(){
  $(".parent").click(function(){
    $(this).find('.child').slideToggle("slow");
  })})
;

$(document).ready(function(){
  $(".year").click(function(){
    $(this).toggleClass("open");
  })})

// navigation section animation 
let headerHeight = $(window).width() < 600 ? 0 : 80; // Adjust header height here or use dynamic function

$(document).ready(function () {
  $("#goToProfile").click(function () {
    let target = $("#profile").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

$(document).ready(function () {
  $("#goToSkill").click(function () {
    let target = $("#skill").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

$(document).ready(function () {
  $("#goToPortfolio").click(function () {
    let target = $("#portfolio").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

$(document).ready(function () {
  $("#goToCertificate").click(function () {
    let target = $("#certificate").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

$(document).ready(function () {
  $("#goToWork").click(function () {
    let target = $("#work").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

$(document).ready(function () {
  $("#goToContact").click(function () {
    let target = $("#contact").offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: target
    }, 600); // 800ms = 0.8 second scroll
  });
});

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

// Click to view contact card
$('#contact .container .flip-card').click(function () {
  $(this).toggleClass('flipped');
});



// scroll to each section

const sections = $('section');
let isScrolling = false;
let startY = 0;
let endY = 0;

function getCurrentSectionIndex() {
  const scrollTop = $(window).scrollTop();
  let closestIndex = 0;
  let minDistance = Infinity;

  sections.each(function (i) {
    const sectionTop = $(this).offset().top;
    const distance = Math.abs(scrollTop - sectionTop);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  });
  return closestIndex;
}

function scrollToSection(i) {
  isScrolling = true;
  $('body').addClass('disable-scroll'); // disable scroll input

  $('html, body').stop().animate({
    scrollTop: $(sections[i]).offset().top - headerHeight
  }, 700, () => {
    isScrolling = false;
    $('body').removeClass('disable-scroll'); // re-enable scroll input
  });
}

// Mouse wheel scroll (desktop)
$(window).on('wheel', function (e) {
  if (isScrolling) return;

  const currentIndex = getCurrentSectionIndex();
  const currentSection = $(sections[currentIndex]);
  const sectionHeight = currentSection.outerHeight();
  const windowHeight = $(window).height();
  const scrollTop = $(window).scrollTop();
  const sectionTop = currentSection.offset().top;
  const scrollInSection = scrollTop - sectionTop;

  if (sectionHeight > windowHeight) {
    if (sectionHeight > windowHeight) {
      // Scrolling down
      if (e.originalEvent.deltaY > 0) { 
        // If NOT at the bottom yet, allow normal scroll
        if (scrollInSection + windowHeight < sectionHeight - 10) return;
      } 

      // Scrolling up
      if (e.originalEvent.deltaY < 0) {
        // If NOT at the top yet, allow normal scroll
        if (scrollInSection > 10) return;
      }
    }  
  }

  // if (e.originalEvent.deltaY > 0 && currentIndex < sections.length - 1) {
  //   scrollToSection(currentIndex + 1); } else
    if (e.originalEvent.deltaY < 0 && currentIndex > 0) {
    scrollToSection(currentIndex - 1);
  }
});

// Touch events (mobile)
$(window).on('touchstart', function (e) {
  startY = e.originalEvent.touches[0].clientY;
});

$(window).on('touchend', function (e) {
  endY = e.originalEvent.changedTouches[0].clientY;
  const deltaY = startY - endY;

  if (isScrolling) return;

  // Threshold to prevent tiny scrolls triggering snap
  if (Math.abs(deltaY) < 30) return;

  const currentIndex = getCurrentSectionIndex();
  const currentSection = $(sections[currentIndex]);
  const sectionHeight = currentSection.outerHeight();
  const windowHeight = $(window).height();
  const scrollTop = $(window).scrollTop();
  const sectionTop = currentSection.offset().top;
  const scrollInSection = scrollTop - sectionTop;

  if (sectionHeight > windowHeight) {
    if (deltaY > 0 && scrollInSection + windowHeight < sectionHeight) return;
    if (deltaY < 0 && scrollInSection > 0) return;
  }

  // if (deltaY > 0 && currentIndex < sections.length - 1) {
  //   scrollToSection(currentIndex + 1);
  if (deltaY < 0 && currentIndex > 0) {
    scrollToSection(currentIndex - 1);
  }
});

// Keyboard arrow navigation
$(document).on('keydown', function (e) {
  if (isScrolling) return;

  const currentIndex = getCurrentSectionIndex();
  const currentSection = $(sections[currentIndex]);
  const sectionHeight = currentSection.outerHeight();
  const windowHeight = $(window).height();
  const scrollTop = $(window).scrollTop();
  const sectionTop = currentSection.offset().top;
  const scrollInSection = scrollTop - sectionTop;

  if (sectionHeight > windowHeight) {
    // if (e.key === "ArrowDown" && scrollInSection + windowHeight < sectionHeight - 10) return;
    if (e.key === "ArrowUp" && scrollInSection > 10) return;
  }

  if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
    scrollToSection(currentIndex + 1);
  } else if (e.key === "ArrowUp" && currentIndex > 0) {
    scrollToSection(currentIndex - 1);
  }
});
