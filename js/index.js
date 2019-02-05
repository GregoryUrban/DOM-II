// Your code goes here

// Start of Task 3: Create Unique Event Listeners

//#1 load window
window.addEventListener('load', (e) => { 
    alert(`#1 load - This site is ready for you! - tip: use the space bar to press OK on these alerts, you will get an alert for all 11 `)
    }); 

// #2
// resize window
window.addEventListener('resize', (e) => { 
    alert(`#2 resize - What you dont like my sizes?`);
    }); 

    // #'S 3 AND 4: MOUSEENTER & MOUSELEAVE EVENTS

    // nav
    let navEnter = document.querySelector('nav');
    navEnter.addEventListener('mouseenter', (e) => { 
        e.target.style.backgroundColor = 'red';
        // alert(`#3 mouseenter`)
    });


    let navLeave = document.querySelector('nav');
    navLeave.addEventListener('mouseleave', (e) => { 
        e.target.style.backgroundColor = 'white';
        // alert(`#4 mouseleave`)
    });

    // h1
    let hOneEnter = document.querySelector('h1');
    hOneEnter.addEventListener('mouseenter', (e) => { 
    e.target.style.backgroundColor = 'red';
    alert(`#3 mouseenter`)
    });

    let hOneLeave = document.querySelector('h1');
    hOneLeave.addEventListener('mouseleave', (e) => { 
    e.target.style.backgroundColor = 'white';
    alert(`#4 mouseleave`)
    });


    // btn
    let btnLeave = document.querySelectorAll('.btn');
    for (var i = 0; i < btnLeave.length; i++) {
        btnLeave[i].addEventListener('mouseleave', (e) => { 
            // e.stopPropagation(); 
            alert(`You've come this far, why not Sign Up!`)
            });
        }
    // END OF #2 and #3 MOUSEENTER & MOUSELEAVE

// #5 mouseup
let btnUp = document.querySelectorAll('.btn');
for (var i = 0; i < btnLeave.length; i++) {
    btnUp[i].addEventListener('mouseup', (e) => { 
        // e.stopPropagation(); 
        alert(`#5 btnup - Thanks For Signing Up!`)
        });
    }
    
// #6 dblclick
let hTwoClick = document.querySelector('h2');
hTwoClick.addEventListener('dblclick', (e) => { 
e.target.style.backgroundColor = 'brown';
alert(`#6 l- Thanks For Signing Up!`)
});

// #7 mousedown
let imgMouseDown = document.querySelector('.img-content');
imgMouseDown.addEventListener('mousedown', (e) => { 
    alert (`#7 mousedown - You won't really need a map, but it's nice eh?`); 
  });

// #8 wheel
introWheel = document.querySelector('.intro');
introWheel.addEventListener('wheel', (e) => { 
    alert (`#8 wheel - Wow youre wheely fast`); 
});

// #9 mousemove
let contentDestinationMove = document.querySelector('.content-destination');
contentDestinationMove.addEventListener('mousemove', (e) => { 
e.target.style.backgroundColor = 'purple';
alert (`#9 mousemove`); 
});

// #10 mouseout
let contentDestinationLeave = document.querySelector('.content-destination');
contentDestinationLeave.addEventListener('mouseout', (e) => { 
e.target.style.backgroundColor = 'white';
alert (`#10 mousemout`); 
});

// #11 focusin
let contentPickFocus = document.querySelector('.content-pick');
contentPickFocus.addEventListener('focusin', (e) => { 
    alert(`#11 focusin - Its focused now`)
});
// END OF Task 3: Create Unique Event Listeners

// stopPropagation
let bodyClick = document.querySelector('body');
bodyClick.addEventListener('click', (e) => { 
    e.target.style.backgroundColor = 'green';
});

let pClick = document.querySelectorAll('p');
for (var i = 0; i < pClick.length; i++) {
    pClick[i].addEventListener('click', (e) => { 
        // e.stopPropagation(); // this still bubbles up
        e.target.style.backgroundColor = 'yellow';
        alert(`Stop Propagation - Notice how its turning yellow instead of green?`)
        // this doesnt happen, it turns green from the bodyClick
        });
    }



// Prevent Default
let navPrevent = document.querySelector('nav');
navPrevent.addEventListener('click', (e) => { 
    e.preventDefault();
    alert(`preventDefault - You clicked the nav but the URL doesnt show # at the end`)    
});
