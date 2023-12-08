let iconHeart = document.querySelectorAll('.icon-text i');
let btnTheme = document.querySelector('.blog-container i');
let boxItens = document.querySelectorAll('article');
let dateText = document.querySelectorAll('.date-text small');

function changeTheme(){

    btnTheme.addEventListener('click', () => {

        //Modo noturno
        if(btnTheme.classList.contains('fa-moon')){

            btnTheme.classList.remove('fa-moon');
            btnTheme.classList.add('fa-sun');

            
            document.querySelector('header').classList.remove('header');           
            document.querySelector('header').classList.add('header-night');  

            document.querySelector('body').style.background = "#121214";

            for(let b = 0; b < dateText.length; b++){
                dateText[b].style.color = '#E07B67';
            }
            
            for(let i=0; i < boxItens.length; i++){
                boxItens[i].style.color = 'white';
                boxItens[i].classList.add('article-night')
            }

            for(let a=0; a < iconHeart.length; a++){
                iconHeart[a].style.color = '#E07B67';
            }
                   

        //Modo claro
        }else if(btnTheme.classList.contains('fa-sun')){

            btnTheme.classList.remove('fa-sun');
            btnTheme.classList.add('fa-moon');

            for(let b = 0; b < dateText.length; b++){
                dateText[b].style.color = 'black'
            }

            for(let i=0; i < boxItens.length; i++){
                boxItens[i].style.color = 'black';
                boxItens[i].classList.remove('article-night')
            }

            document.querySelector('header').classList.remove('header-night')           
            document.querySelector('header').classList.add('header')  

            document.querySelector('body').style.background = "#fff";

            for(let a=0; a < iconHeart.length; a++){
                iconHeart[a].style.color = '#574AE8';
            }
 
        }
        
    })

}

function changeIconHeart(){

    for(let i=0; i < iconHeart.length; i++){

        iconHeart[i].addEventListener('click', () => {
            
            if(iconHeart[i].classList.contains('fa-regular')){
                iconHeart[i].classList.remove('fa-regular');
                iconHeart[i].classList.add('fa-solid');
            }else{
                iconHeart[i].classList.remove('fa-solid');
                iconHeart[i].classList.add('fa-regular');
            }
    
        })
    
    }

}

changeIconHeart();
changeTheme();



