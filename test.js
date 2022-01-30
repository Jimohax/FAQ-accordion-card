const accordion = document.getElementsByClassName('inbox');
for(i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

const input = document.getElementById('input')
input.addEventListener('input', boom )

function boom(){
    const type = document.getElementById('type');

    if(input.value) {
        type.innerHTML = input.value + ' is Cool';
    } else{
        type.innerHTML = "Please type your name "
    }
    
}