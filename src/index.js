import './less/index.less'

// Your code goes here!

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', function (evt) {
    evt.target.style.color = 'purple';
});

const nav = document.querySelector('.nav');
nav.addEventListener('dblclick', function(evt) {
    console.log('double click event')
});

const log = document.querySelector('body');
log.addEventListener('keydown', logKey);

function logKey(evt) {
    console.log(log)
}