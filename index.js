

//Typed-js stuff
if (document.querySelector('.typed')) {
  new Typed('.typed', {
    strings: ['Full Stack Overflow Developer', 'Full Stack Developer'],
    typeSpeed: 110,
    startDelay: 1200,
    showCursor: false,
    backDelay: 700,
    smartBackspace: true,
    backSpeed: 50,
    contentType: 'html',
    loop: true,
    loopCount: 3,
    },
  );
}

if (document.querySelector('.rellax-hero')) {
  var rellax = new Rellax('.rellax-hero', {
    speed: -5,
    vertical: true,
  });
}


/* //scroll-indicator
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} */

/* butter smooth scrolling */
var options = {
    wrapperId: 'body',
    wrapperDamper: 0.04,
    cancelOnTouch: false
  };
butter.init(options);

/* scroll reveal */
ScrollReveal().reveal('.project-wrapper', { delay: 100, reset: true, duration: 1000, opacity: 1 });


/* FORM VALIDATION STUFF */
function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/;
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }


    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Please enter your email');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }

    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if(s == "" || s == null ){
          document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
          document.getElementById('subject').style.borderColor = "red";
          return false;
      }

    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }

    else{
          return true;
      }

}
