//SWIPER SLIDE INITIALIZATION
var slider = new Swiper('.swiper-container', {
      slidesPerView: 1,
      breakpoints: {
      992: {
        slidesPerView: 3
      },
      }
})

// Lightbox Initialization
var $lightbox = new SimpleLightbox('.swiper-slide a', { /* options */ });

//GSAP ANIMATIONS
var tl1 = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl1.to('.layer', {x: '-100vw', duration: 0.4, stagger: .15, delay: .5})
.to('.overlay', {x: '-100vw', duration: 0.01})
.from('.anim', {scaleY: 0, duration: 0.5, ease: Expo.easeOut})
.from('.btn-primary', {scale: '0', x: '-100px', ease: Power4.easeOut})
;
gsap.to(".col-md-4", {
  scrollTrigger: {
    trigger: '.col-md-4',
    start: 'top center',
    scrub: 1.2,
  }, 
  y: 30,
  x: 10,
  duration: 3
});
gsap.from(".col-md-4", {
  scrollTrigger: {
    trigger: '.col-md-4',
    start: 'top center',
    scrub: 1,
  }, 
  opacity: 0.9,
  duration: 3
});
gsap.from("#subscribe", {
  scrollTrigger: {
    trigger: '#subscribe',
    start: 'top center',
  }, 
  x: '100vw',
  duration: 0.5
});
gsap.from("#countdown", {
  scrollTrigger: {
    trigger: '#countdown',
    start: 'top center',
  }, 
  x: '-100vw',
  duration: 0.5
});

//COUNTDOWN DATE
var countDownDate = new Date("Jul 25, 2031 16:37:52").getTime();
var myfunc = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
    
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d "
  document.getElementById("hours").innerHTML = hours + "h " 
  document.getElementById("mins").innerHTML = minutes + "m " 
  document.getElementById("secs").innerHTML = seconds + "s"

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000)



//ASYNCHRONOUS REQUEST FOR THE WAITING LIST SUBSCRIPTION/
  var form = $('#form'),
      email = $('#email'),
      submit = $('#submit'),
      alert = $('.alert'),
      loading = document.querySelector('.loading-dots');
  form.submit(function(e) {
      console.log(form.serialize());
    e.preventDefault();
      $.ajax({
        type: "POST",
        url: "action.php",
        data: $(this).serialize(),
        beforeSend: function() { 
          loading.style.display = "block";
          console.log('test');
        },
        success: function(message) {
            email.val('');
            console.log('done');
            alert.html(`${message}`).slideDown();
            loading.style.display = "none";
      },
      error: function(error) {
            alert.html(`${message}`).slideDown();
            loading.style.display = "none";
      }
    })
  });