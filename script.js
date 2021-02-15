const projectHeading  = document.querySelector('.project-heading');
const projectCaption  = document.querySelector('.project-captions');
const stack = document.getElementById('stack');
const liveLink = document.querySelector('.live');
const gitHubLink = document.querySelector('.github');

const headingForS1 = 'Grid Frame Work'
const headingForS2 = 'Life style article'
const headingForS3 = 'News week'
const headingForS4 = 'Social'
const headingForS5 = 'weather app'

const contentForS1 = 'The project to design custom made grid-based framework using CSS Grid'
const contentForS2 = 'Life style article'
const contentForS3 = 'News week'
const contentForS4 = ' A social media application where user may signup connect with friends, posting and liking friends post.'
const contentForS5 = 'weather app'


const stackForS1 = 'Stack: CSS Grid'
const stackForS2 = 'Stack: Ruby on rails, RSpec,'
const stackForS3 = 'Stack: Bootstrap'
const stackForS4 = 'Stack: Ruby on rails, RSpec,'
const stackForS5 = 'Stack: Javascript, Webpack, OpenWeatherAPI'


const GitHublinkForS1 = 'https://github.com/IBUNHABIBU/GRID-FRAMEWORK'
const GitHublinkForS2 = 'https://github.com/IBUNHABIBU/lifestyle_articles';
const GitHublinkForS3 = 'https://github.com/IBUNHABIBU/Bootstrap-Project';
const GitHublinkForS4 = 'https://github.com/IBUNHABIBU/ror-social-scaffold';
const GitHublinkForS5 = 'https://github.com/IBUNHABIBU/weather-app';


const livelinkForS1 = 'https://rawcdn.githack.com/IBUNHABIBU/GRID-FRAMEWORK/44ef6cc3f2ca5cede15c1865492901b6c4c680b4/index.html'
const livelinkForS2 = 'https://lifestylearticle.herokuapp.com/';
const livelinkForS3 = 'https://raw.githack.com/IBUNHABIBU/Bootstrap-Project/bootstrap/index.html';
const livelinkForS4 = 'https://sm-social-app.herokuapp.com/';
const livelinkForS5 = 'https://ibunhabibuweather.netlify.app/';

const slider = document.getElementById('slider');
slider.addEventListener('click', (e) => {
  let id = e.target.id;
  switch(id) {
    case 's1':
      projectHeading.innerText = headingForS1;
      projectCaption.innerText = contentForS1;
      stack.innerText = stackForS1;
      gitHubLink.setAttribute('href',GitHublinkForS1);
      liveLink.setAttribute('href',livelinkForS1);

    break;
    case 's2':
      projectHeading.innerText = headingForS2;
      projectCaption.innerText = contentForS2;
      stack.innerText = stackForS2;
      gitHubLink.setAttribute('href',GitHublinkForS2);
      liveLink.setAttribute('href',livelinkForS2);
    break;
    case 's3':
      projectHeading.innerText = headingForS3;
      projectCaption.innerText = contentForS3;
      stack.innerText = stackForS3;
      gitHubLink.setAttribute('href',GitHublinkForS3);
      liveLink.setAttribute('href',livelinkForS3);
    break;
    case 's4':
      projectHeading.innerText = headingForS4;
      projectCaption.innerText = contentForS4;
      stack.innerText = stackForS4;
      gitHubLink.setAttribute('href',GitHublinkForS4);
      liveLink.setAttribute('href',livelinkForS4);
    break;
    case 's5':
      projectHeading.innerText = headingForS5;
      projectCaption.innerText = contentForS5;
      stack.innerText = stackForS5;
      gitHubLink.setAttribute('href',GitHublinkForS5);
      liveLink.setAttribute('href',livelinkForS5);
    break;
  }
})