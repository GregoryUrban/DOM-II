// TweenMax.to(".block.block--red", 2, {left:600});
// TweenMax.to(".block.block--red", 6, {x:600, rotation:360, scale:0.5});


let blockz = document.querySelectorAll(".block");
blockz.forEach((index,i) => {
  index.addEventListener('mousedown', (e) => { 
    TweenMax.to(e.currentTarget, 1, {x:'600', rotation:3600, scale:0.5,})
    // tweenMax.reverse(2)
  });
  
});

blockz.forEach((index,i) => {
  index.addEventListener('mouseup', (e) => { 
    TweenMax.from(e.currentTarget, 1, {x:'0', rotation:3600, scale:0.5,})
    // tweenMax.reverse(2)
  });
  
});


// TweenMax.to(".block.block--red", 1, {x:600, rotation:360, scale:0.5});

  // const fakeImages = document.querySelectorAll(".fake-image");
	// fakeImages.forEach(fakeImage => {
	//   console.log('fakeImage: ', fakeImage);
	// });


// const rocket = document.createElement('block');
// // flex-direction = 'row'
// rocket.width = 500
// rocket.height = 100
// rocket.margin = 10
// rocket.style.color = 'purple'

// block.append(rocket);

// const lastNav = document.createElement('a');
// lastNav.href = '#';
// lastNav.textContent = 'Get Started';
// lastNav.style.color = 'green';

// nav.append(lastNav);


// const rockets = document.querySelector('.rockets');
class Rockets {
  constructor(element){
    this.element = element;
    this.height = height;
    this.width = width;
    this.style.color = color;
    // TweenMax.to(e.currentTarget, 6, {x:600, rotation:360, scale:0.5});
  }
}


const rocky = document.createElement('.rockets');
// flex-direction = 'row'
rocky.width = 500
rocky.height = 100
rocky.margin = 10
rocky.style.color = 'purple'
rocket.append(rocky);


// document.body.onload = addElement;
// function addElement () { 
//     // create a new div element 
//     var newDiv = document.createElement("div"); 
//     // and give it some content 
//     var newContent = document.createTextNode("Hi there and greetings!"); 
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);  
  
//     // add the newly created element and its content into the DOM 
//     var currentDiv = document.getElementById("div1"); 
//     document.body.insertBefore(newDiv, currentDiv); 
//   }