const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // input요소에 포커스
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // 속성 부여
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021
