const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

const projectHeading = document.querySelector('.project-heading');
const projectCaption = document.querySelector('.project-captions');
const stack = document.getElementById('stack');
const liveLink = document.querySelector('.live');
const gitHubLink = document.querySelector('.github');

const headingForS1 = 'Recipe zone';
const headingForS2 = 'Life style article';
const headingForS3 = 'Grid Frame Work';
const headingForS4 = 'Social';
const headingForS5 = 'weather app';

const contentForS1 = 'A browsable list of items that you can filter and access to the details of one item. All data are meals recipes that come from TheMealDb API';
const contentForS2 = 'In this project users will be posting their articles with background images and ability to vote for a good article and the most voted article is placed on the front page with the big Image.';
const contentForS3 = 'The project to design custom made grid-based framework using CSS Grid.';
const contentForS4 = ' A social media application where user may signup connect with friends, posting and liking friends post.';
const contentForS5 = 'Is the Javascript quiz to implement the concept of API. I made a simple page to fetch for weather data.';

const stackForS1 = 'Stack: React and Redux';
const stackForS2 = 'Stack: Ruby on rails, RSpec';
const stackForS3 = 'Stack: CSS Grid';
const stackForS4 = 'Stack: Ruby on rails, RSpec';
const stackForS5 = 'Stack: Javascript, Webpack, OpenWeatherAPI';

const GitHublinkForS1 = 'https://https://github.com/IBUNHABIBU/catalogue_of_recipes';
const GitHublinkForS2 = 'https://github.com/IBUNHABIBU/lifestyle_articles';
const GitHublinkForS3 = 'https://github.com/IBUNHABIBU/GRID-FRAMEWORK';
const GitHublinkForS4 = 'https://github.com/IBUNHABIBU/ror-social-scaffold';
const GitHublinkForS5 = 'https://github.com/IBUNHABIBU/weather-app';

const livelinkForS1 = 'hhttps://slm-foodrecipe.herokuapp.com/';
const livelinkForS2 = 'https://lifestylearticle.herokuapp.com/';
const livelinkForS3 = 'https://rawcdn.githack.com/IBUNHABIBU/GRID-FRAMEWORK/44ef6cc3f2ca5cede15c1865492901b6c4c680b4/index.html';
const livelinkForS4 = 'https://sm-social-app.herokuapp.com/';
const livelinkForS5 = 'https://ibunhabibuweather.netlify.app/';

const slider = document.getElementById('slider');

slider.addEventListener('click', (e) => {
  const { id } = e.target;
  switch (id) {
    case 's1':
      projectHeading.innerText = headingForS1;
      projectCaption.innerText = contentForS1;
      stack.innerText = stackForS1;
      gitHubLink.setAttribute('href', GitHublinkForS1);
      liveLink.setAttribute('href', livelinkForS1);
      break;
    case 's2':
      projectHeading.innerText = headingForS2;
      projectCaption.innerText = contentForS2;
      stack.innerText = stackForS2;
      gitHubLink.setAttribute('href', GitHublinkForS2);
      liveLink.setAttribute('href', livelinkForS2);
      break;
    case 's3':
      projectHeading.innerText = headingForS3;
      projectCaption.innerText = contentForS3;
      stack.innerText = stackForS3;
      gitHubLink.setAttribute('href', GitHublinkForS3);
      liveLink.setAttribute('href', livelinkForS3);
      break;
    case 's4':
      projectHeading.innerText = headingForS4;
      projectCaption.innerText = contentForS4;
      stack.innerText = stackForS4;
      gitHubLink.setAttribute('href', GitHublinkForS4);
      liveLink.setAttribute('href', livelinkForS4);
      break;
    case 's5':
      projectHeading.innerText = headingForS5;
      projectCaption.innerText = contentForS5;
      stack.innerText = stackForS5;
      gitHubLink.setAttribute('href', GitHublinkForS5);
      liveLink.setAttribute('href', livelinkForS5);
      break;
    default:
      projectHeading.innerText = headingForS1;
      projectCaption.innerText = contentForS1;
      stack.innerText = stackForS1;
      gitHubLink.setAttribute('href', GitHublinkForS1);
      liveLink.setAttribute('href', livelinkForS1);
  }
});
