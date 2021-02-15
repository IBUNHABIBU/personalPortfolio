const navBtns = document.querySelectorAll('.nav-btns')
// const makeChange = (e) => {
//   console.log(e.target)
// }
// Array.from(navBtns).forEach( el => console.log(el));
console.log(navBtns)
const header = document.querySelector('header');
const changeColor = (e) => {
  if(e.target.tagName === 'A') {
    e.target.style.color = 'blue';
  }
}
header.addEventListener('click', changeColor)