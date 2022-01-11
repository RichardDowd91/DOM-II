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


function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.intro');
  document.onwheel = zoom;

  const buttons = document.querySelectorAll('.btn')
  buttons.forEach(button =>{
      button.addEventListener('mouseover', () => {
          button.style.backgroundColor = 'green'
          button.style.color = 'white'
      }) 
  })
  
  window.addEventListener('scroll', () =>{
  console.log('Im scrolling')
    });