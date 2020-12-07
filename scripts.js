// Banner DOM
const secondAnimation = document.getElementById('second-animation');
const smallVideoDiv = document.getElementById('small-video-div');
const watchDogsLogo = document.getElementById('watch-dogs-logo');
const hackingIsYourWeapon = document.getElementById('hacking-is-your-weapon');
const rollOver = document.getElementById('roll-over');
const ubisoftLogo = document.getElementById('ubisoft-logo');
const bannerTextDiv = document.getElementById('banner-text-div');

// Final Banner DOM
const finalBanner = document.getElementById('final-banner-div');
const dvd = document.getElementById('dvd');
const preorder = document.getElementById('preorder');
const now = document.getElementById('now');
const available = document.getElementById('available');
const finalRollover = document.getElementById('final-rollover');

// Dark Overlay DOM
const darkOverlay = document.getElementById('dark-overlay');
const square = document.getElementById('square');
const circle1 = document.getElementById('circle1');
let count = document.getElementById('count');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');

// Lightbox DOM
const lightbox = document.getElementById('light-box-div');
const lightBoxMain = document.getElementById('light-box-main');
const lightDVD = document.getElementById('light-box-dvd');

// BANNER
let interval1;
let interval2;
let interval3;
let interval4;
let interval5;

function showVideo() {
  secondAnimation.style.animationName = 'video';
  interval2 = setInterval(showSmallVideo, 1000);
  clearInterval(interval1);
}

function showSmallVideo() {
  smallVideoDiv.style.display = 'block';
  smallVideoDiv.style.animationName = 'small-video';
  interval3 = setInterval(showText, 300);
  clearInterval(interval2);
}

function showText() {
  watchDogsLogo.style.display = 'block';
  watchDogsLogo.style.animationName = 'slideInFromLeft';

  hackingIsYourWeapon.style.display = 'block';
  hackingIsYourWeapon.style.animationName = 'slideInFromRight';

  rollOver.style.display = 'block';
  rollOver.style.animationName = 'slideInFromLeft';

  ubisoftLogo.style.display = 'block';
  ubisoftLogo.style.animationName = 'slideInFromBottom';

  bannerTextDiv.style.animationName = 'bannerTextDisolve';
  interval4 = setInterval(removeText, 2000);
  interval5 = setInterval(showFinalBanner, 2000);
  clearInterval(interval3);
}

function removeText() {
  bannerTextDiv.style.display = 'none';
  clearInterval(interval4);
}

function showFinalBanner() {
  dvd.style.display = 'block';
  dvd.style.animationName = 'slideInFromLeft';

  preorder.style.display = 'block';
  preorder.style.animationName = 'slideInFromTop';

  now.style.display = 'block';
  now.style.animationName = 'slideInFromTop';

  available.style.display = 'block';
  available.style.animationName = 'slideInFromTop';

  finalRollover.style.display = 'block';
  finalRollover.style.animationName = 'final-rollover';
  clearInterval(interval5);
}

interval1 = setInterval(showVideo, 2000);

// ROLLOVER

let timer;
let twoCircle;
let threeCircle;
let fourCircle;
let expandLight;
let lightboxDvd;
count.innerHTML = 3;

function handleTimer() {
  if (count.innerHTML === '' || count.innerHTML ==0) {
    clearInterval(timer);
    endCountdown();
    expandBigWindow();
  } else if (count.innerHTML == 1) {
    count.innerHTML = '';
  } else {
    circle2.style.display = 'block';
    circle2.style.animationName = 'circleAnimate';
    count.innerHTML = count.innerHTML - 1;
  }
}

function circleThreeAnimation() {
  circle3.style.display = 'block';
  circle3.style.animationName = 'circleAnimate';
  threeCircle = setInterval(circleFourAnimation, 1000);
}

function circleFourAnimation() {
  circle4.style.display = 'block';
  circle4.style.animationName = 'circleAnimate';
  clearInterval(threeCircle);
  expandLight = setInterval(expandLightbox, 1000);
}

function endCountdown() {
  untriggerDarkOverlay();
  clearInterval(timer);
}

function squareAnimation() {
  square.style.display = 'block';
  square.style.animationName = 'squareToCircle';
  circle1.style.display = 'block';
  circle1.style.animationName = 'circleOneAnimate';
  count.style.display = 'block';
  count.style.animationName = 'count';
  twoCircle = setInterval(circleThreeAnimation, 2000);
  timer = setInterval(function () {
    handleTimer();
  }, 1000);
}

function untriggerDarkOverlay() {
  clearInterval(timer);
  clearInterval(twoCircle);
  clearInterval(threeCircle);
  clearInterval(fourCircle);

  count.innerHTML = 3;
  resetAllAnimations();
}

function resetAllAnimations() {
  square.style.display = 'none';
  circle2.style.display = 'none';
  circle3.style.display = 'none';
  circle4.style.display = 'none';
}

darkOverlay.addEventListener('mouseover', squareAnimation);
darkOverlay.addEventListener('mouseleave', untriggerDarkOverlay);
darkOverlay.addEventListener('click', expandLightbox);

// LIGHTBOX

function expandLightbox() {
  lightbox.style.animationName = 'lightboxAnimation';
  lightbox.style.visibility = 'visible';
  clearInterval(expandLight);
  lightboxDvd = setInterval(changeToDvd, 1000); 
}

function changeToDvd() {
  lightDVD.style.display = 'block';
  lightDVD.style.animationName = 'lightboxAnimationDVD';
  clearInterval(lightboxDvd);
}

function closeLightbox() {
  lightbox.style.visibility = 'hidden';
  lightDVD.style.display = 'none';
  resetLightboxAnimations()
}

function resetLightboxAnimations() {
  lightbox.style.animationName = 'none';
  lightDVD.style.animationName = 'none';
  lightDVD.style.display = 'none';
}

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});