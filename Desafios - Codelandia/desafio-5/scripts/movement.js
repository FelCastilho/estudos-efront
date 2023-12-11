let person = document.getElementById('image');

function hoverFloat(){

    person.addEventListener('mouseenter', () => {
        person.style.animation = 'none';
        person.style.transition = 'transform 0.5s ease-in-out';
        person.style.transform = 'translateY(-30px)';
    })
    
    person.addEventListener('mouseleave', () => {
        person.style.animation = 'float 5s ease-in-out infinite';
        person.style.transform = 'translateY(0px)';
    })

}

hoverFloat();