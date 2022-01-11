import './less/index.less'

// Your code goes here!

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', function (evt) {
    evt.target.style.color = 'purple';
})