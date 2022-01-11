import './less/index.less'

// Your code goes here!
// event 1
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', function (evt) {
    evt.target.style.color = 'purple';
});
//event 2
const nav = document.querySelector('.nav');
nav.addEventListener('dblclick', function(evt) {
    console.log('double click event')
});
// event 3
const log = document.querySelector('body');
log.addEventListener('keydown', logKey);

function logKey(evt) {
    console.log(log)
}

// event 4
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
// event 5
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach(button =>{
      button.addEventListener('mouseover', () => {
          button.style.backgroundColor = 'green'
          button.style.color = 'white'
      }) 
  })
  //event 6
  window.addEventListener('scroll', () =>{
  console.log('Im scrolling')
    });
// event 7
window.addEventListener('load', ()=> {
    alert('page loaded')
});
// event 8
const footer = document.querySelector('.footer')
footer.addEventListener('mouseleave', () => {
    footer.style.backgroundColor = 'purple'
})
// event 9 + prevent default 
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(evt) {
      evt.preventDefault();
      console.log("GOTCHA SUCKER!");               
    })
})

// event 10 
function windowSize() {
    console.log('Page height is : ', window.innerHeight);
    console.log('Page width is : ', window.innerWidth);
}
window.addEventListener('resize', windowSize);
console.log(windowSize);