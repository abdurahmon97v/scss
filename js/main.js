let btn = document.querySelector('.togle__button');
let span = document.querySelector('.togle__span');

btn.addEventListener('click',function () {
  span.classList.toggle('button--transform');
})