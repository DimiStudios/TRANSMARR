/* SABER LASER */

var saberLaser = document.getElementsByClassName("toggle-icon")[0];
var overlayHref = document.querySelectorAll(".overlay ul li a");

function overlayAnim () {
  document.getElementsByClassName("overlay")[0].classList.toggle("anim");
};

function saberTransform () {
  document.getElementById("nav-container").classList.toggle("pushed");
};

function bothTransforms () {
  overlayAnim();
  saberTransform();
}

for (var i = 0; i < overlayHref.length; i++) {
  overlayHref[i].addEventListener("click", bothTransforms);
}

saberLaser.addEventListener('click', bothTransforms);


/* FIN SABER LASER */
/* IMG MOUSE MOVEMENT */
/* BACK LATER
var bfParody = document.querySelector('.header-full img');

function mouseReact(event) {
  console.log('hola');
  var mouseconst = event.pageX * -1 + event.pageY * -1;
  this.style.transform = `rotateZ(${mouseconst}deg)`;
  this.style.transform = `rotateY(${mouseconst/2}deg)`;
  this.style.transform = `rotateX(${mouseconst/2}deg)`;
}

bfParody.addEventListener('mousemove', mouseReact);
*/
/* IMG MOUSE MOVEMENT */
/* JQUERY TABS */

$("ul li.star-tab").click(function() {
  var tab_on = $(this)[0].getAttribute("data");

  $("ul li.star-tab").removeClass("tab-on");
  $(".tabs-content").removeClass("tab-on");

  $(this).addClass("tab-on");
  $("#" + tab_on).addClass("tab-on");

  /* SYNCHRONIZATION WITH STICKY MENU*/

  removeBlink();
  if (tab_on === "educacion") {
    document.getElementById("educamen").classList.add("blink");
  } else if (tab_on === "experiencia") {
    document.getElementById("expmen").classList.add("blink");
  } else if (tab_on === "sobre-mi") {
    document.getElementById("videomen").classList.add("blink");
  }

});

  /* FIN SYNCHRONIZATION WITH STICKY MENU*/

$("ul li.tab-off").click(function() {
  var tab_on = $(this)[0].getAttribute("data");

  $("ul li.tab-off").removeClass("tab-on");
  $("#educacion div").removeClass("tab-on");

  $(this).addClass("tab-on");
  $("#" + tab_on).addClass("tab-on");
});

/* FIN JQUERY TABS */
/* EXPERIENCE CLOSER */

// I Will Back to improve you

var closericon = document.querySelector(".box-close");
var closericon2 = document.querySelector(".sd-closer");
var closericon3 = document.querySelector(".td-closer");
var closericon4 = document.querySelector(".st-closer-2");
var closericon5 = document.querySelector(".sd-closer-2");
var closericon6 = document.querySelector(".td-closer-2");

function closeBox() {
  $("#exp1").prop("checked", false);
  $("#exp2").prop("checked", false);
  $("#exp3").prop("checked", false);
  $("#exp1-2").prop("checked", false);
  $("#exp2-2").prop("checked", false);
  $("#exp3-2").prop("checked", false);
}

closericon.addEventListener("click", closeBox);
closericon2.addEventListener("click", closeBox);
closericon3.addEventListener("click", closeBox);
closericon4.addEventListener("click", closeBox);
closericon5.addEventListener("click", closeBox);
closericon6.addEventListener("click", closeBox);

/* STICKY MENU */

var stickynav = document.getElementById("sticky-nav");
var sticky = stickynav.offsetTop;

function stickyNav() {
  window.pageYOffset >= sticky
    ? stickynav.classList.add("sticky")
    : stickynav.classList.remove("sticky");
}

window.onscroll = function() {
  stickyNav();
};

/* VIDEO PLAYER */

//GET ELEMENTS

var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var playerToggle = player.querySelector(".playertoggle");
var mute = player.querySelector(".mute-button");
var playerIcon = player.querySelector(".fa-play");
var expand = player.querySelector('.fa-expand');

//FUNCTIONS

function togglePlay() {
  var method = video.paused ? "play" : "pause";
  video[method]();
  playerIcon.classList.toggle("fa-pause");
}

function mutePush() {
  if ($("video").prop("muted")) {
    $("video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
  var muteON = '<i class="fa fa-volume-up"></i>';
  var muteOFF = '<i class="fa fa-volume-off"></i>';
  var muteicon = $("video").prop("muted") ? muteOFF : muteON;
  mute.innerHTML = muteicon;
}

function fullScreen(el) {
  if(el.requestFullScreen) {
    el.requestFullScreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else if (el.msRequestFullScreen) {
    el.msRequestFullScreen();
  }
}

function expandVideo() {
  fullScreen(video);
  video.play();
}


//EVENT LISTENERS

expand.addEventListener('click', expandVideo);
video.addEventListener("click", togglePlay);
mute.addEventListener("click", mutePush);
playerToggle.addEventListener("click", togglePlay);

/* CONTACT FORM */

var nameInput = document.querySelector('.name');
var emailInput = document.querySelector('.email');
var telInput = document.querySelector('.tel');
var commentInput = document.querySelector('.comment');
var submitButton = document.querySelector('input[type=submit]');
var form = document.querySelector('.form');
var other = document.querySelector('.other');

var checkInputs = {
  opt1 : document.querySelector('#cbox1'),
  opt2 : document.querySelector('#cbox2'),
  opt3 : document.querySelector('#cbox3'),
  opt4 : document.querySelector('#cbox4'),
};

var nameError = document.getElementsByClassName('name-help')[0];
var emailError = document.getElementsByClassName('email-help')[0];
var phoneError = document.getElementsByClassName('phone-help')[0];
var inputError = document.getElementsByClassName('whoknown-help')[0];
var commentError = document.getElementsByClassName('comment-help')[0];
var otherError = document.getElementsByClassName('other-help')[0];

checkInputs.opt4.addEventListener('click', function() {
  other.classList.toggle("other-checked");
  if (other.classList.contains("other-checked")) {
    other.setAttribute("required", "");
  } else {
    other.removeAttribute("required");
  }
});

form.addEventListener('submit', function(event) {

  event.preventDefault();

  if (nameInput.checkValidity() === false) {
    nameError.classList.add('validation-error');
    nameInput.focus();
    return false;
  } else {
    nameError.classList.remove('validation-error');
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var telRegex = /^(\+34|0034|34)?[6|7|9][0-9]{8}$/;
  var resultEmailValidation = emailRegex.test(emailInput.value);
  var resultPhoneValidation = telRegex.test(telInput.value);
  var resultCommentValidation = commentInput.value.match(/\S+/g);
  
  console.log(resultCommentValidation);

  if (resultEmailValidation === false) {
    emailError.classList.add('validation-error');
    emailInput.focus();
    return false;
  } else {
    emailError.classList.remove('validation-error');
  }

  if (resultPhoneValidation === false) {
    phoneError.classList.add('validation-error');
    telInput.focus();
    return false;
  } else {
    phoneError.classList.remove('validation-error');
  }
/* No me ha funcionado la validación de HTML5 para los checkboxes, desconozco la razón, por falta de tiempo he cambiado a esto */
  if (checkInputs.opt1.checked || checkInputs.opt2.checked || checkInputs.opt3.checked || checkInputs.opt4.checked) {
    inputError.classList.remove('validation-error');
  } else {
    inputError.classList.add('validation-error');
    return false;
  }

  if (other.checkValidity() === false) {
    otherError.classList.add('validation-error');
    other.focus();
    return false;
  } else {
    otherError.classList.remove('validation-error');
  }

  
  if (resultCommentValidation.length > 150) {
    commentError.classList.add('validation-error');
    commentInput.focus();
    return false;
  } else {
    commentError.classList.remove('validation-error');
  }

 /* if (commentInput.checkValidity() === false || wordsCount.length > maxWords) {
    commentError.classList.add('validation-error');
    commentInput.focus();
    
    return false;
  } else {
    commentError.classList.remove('validation-error');
  }*/

  /*
  POR DIOS, ¿CÓMO HAGO ESTO? SERGIO PLEASE, ILÚSTRAME
  var optsChecked = "";

  for (var i = 0; i <= checkInputs.length; i++) {
    if (this.checked) {
      optsChecked = optsChecked.concat("," + this.value);
    }
  }
  */
  /* OTRA PRUEBA SIN ÉXITO
    var selectedOpts = ""; 

    for (var options in checkInputs){
      if (options.checked) {
        console.log(options);
      }
    };
  */

  var data = {
    Name: nameInput.value,
    Email: emailInput.value,
    Phone: telInput.value,
    From: "No consigo recuperarlo, parezco Jar Jar",
    Other: other.value,
    Comment: commentInput.value,
  };
  createData(data);
  
});


/* CONTACT FORM */