// Your code goes here

// Makes top image disappear when clicked

let bannerPic = document.querySelector('.intro img');

bannerPic.addEventListener('click', event => {
    event.target.style.display = 'none';
})

// Change color of nav links when moused over

let navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(anchor => {
    
    anchor.addEventListener('click', event => {
        event.preventDefault();
        bannerPic.style.display = "block";
    })
    
    anchor.addEventListener('mouseenter', event => {
        event.target.classList.toggle('turnRed');
    })
    
    anchor.addEventListener('mouseleave', event => {
        event.target.classList.toggle('turnRed');
    });

})

// Change background color and text within buttons when pointing device is clicked/released

let buttonPush = document.querySelectorAll('.btn');

buttonPush.forEach(button => {
    button.addEventListener('mousedown', event => {
        event.target.textContent = "You're doing it!";
        event.stopPropagation();
    })

    button.addEventListener('mouseup', event => {
        event.target.textContent = "You're Signed Up!";
        event.target.style.background = "red"
        event.target.style.filter = "drop-shadow(0 0 1rem crimson)";
        event.stopPropagation();
    })
})

// Increase size of paragraph text when copied and change color when pasted 

let allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach(para => {
    para.addEventListener('copy', event => {
        event.target.style.fontSize = '1.8rem';
    })

    para.addEventListener('paste', event => {
        event.target.style.color = 'red';
    })
})

// Trigger an alert if paragraph 

allParagraphs.forEach(para => {
    para.addEventListener('dragstart', () => {
        alert('This action is not recommended!');
    })
})

// Make middle images disappear on double click

let allImages = document.querySelectorAll('img');


allImages.forEach(imgr => {
    imgr.addEventListener('dblclick', event => {
        event.stopPropagation();
        event.target.classList.add('disappear');
        console.log('disappear');
        
    })
})


let everything = document.querySelector('html');

console.log(everything);

window.addEventListener('load', () => {
    
    everything.classList.toggle('beigeBackground');
})

let dest = document.querySelectorAll('.destination');

console.log(dest);


dest.forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.toggle('disappear');
    })
})
