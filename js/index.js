// Your code goes here

window.addEventListener('load', (e) => { 
    alert(`This site is ready for you!`)
    }); 
    
window.addEventListener('resize', (e) => { 
    alert(`What you dont like my sizes?`)
    }); 

let hOneEnter = document.querySelector('h1');
hOneEnter.addEventListener('mouseenter', (e) => { 
  e.target.style.backgroundColor = 'red';
});

let hOneLeave = document.querySelector('h1');
hOneLeave.addEventListener('mouseleave', (e) => { 
  e.target.style.backgroundColor = 'white';
});

let navEnter = document.querySelector('nav');
navEnter.addEventListener('mouseenter', (e) => { 
  e.target.style.backgroundColor = 'red';
});

let navLeave = document.querySelector('nav');
navLeave.addEventListener('mouseleave', (e) => { 
  e.target.style.backgroundColor = 'white';
});

let btnLeave = document.querySelectorAll('.btn');
for (var i = 0; i < btnLeave.length; i++) {
    btnLeave[i].addEventListener('mouseleave', (e) => { 
        alert(`You've come this far, why not Sign Up!`)
        });
    }

let hTwoClick = document.querySelector('h2');
hTwoClick.addEventListener('dblclick', (e) => { 
e.target.style.backgroundColor = 'brown';
});

let imgMouseDown = document.querySelector('.img-content');
imgMouseDown.addEventListener('mousedown', (e) => { 
    alert (`You won't really need a map, but it's nice eh?`); 
    // console.log(`This is my mousedown ${e.code}`); 
  });

let pClick = document.querySelectorAll('p');
for (var i = 0; i < pClick.length; i++) {
    pClick[i].addEventListener('click', (e) => { 
        e.target.style.backgroundColor = 'yellow';
        });
    }

let imgMouseOver = document.querySelectorAll('img-fluid rounded');
for (var i = 0; i < imgMouseOver.length; i++) {
    imgMouseOver[i].addEventListener('mousemove', (e) => { 
        // e.target.style.borderColor = 'red';
        alert (`Nice ya?`); 
        // e.stopPropagation(); 
        });
    }

introWheel = document.querySelector('.intro');
introWheel.addEventListener('wheel', (e) => { 
    alert (`Wow youre wheely fast`); 
});

let contentPickMove = document.querySelector('.content-pick');
contentPickMove.addEventListener('mousemove', (e) => { 
e.target.style.backgroundColor = 'green';
});

let contentPickLeave = document.querySelector('.content-pick');
contentPickLeave.addEventListener('mouseout', (e) => { 
e.target.style.backgroundColor = 'white';
});

let btnUp = document.querySelectorAll('.btn');
for (var i = 0; i < btnLeave.length; i++) {
    btnUp[i].addEventListener('mouseup', (e) => { 
        alert(`Thanks For Signing Up!`)
        e.stopPropagation(); // why cant I stop the mouseleave event?
        });
    }

let contentPickFocus = document.querySelector('.content-pick');
contentPickFocus.addEventListener('focusin', (e) => { 
    alert(`Its focused now`)
});