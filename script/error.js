function error(){
    for(c = 0; c < allInputs.length; c++){
        var input = allInputs[c];
        var div = allDivs[c+1];

        if(input.value == ""){
            var errorMessage = document.createElement('span');
            errorMessage.classList.add("error-message");
            errorMessage.innerHTML = '*Campo obrigatório';
            div.appendChild(errorMessage);         
        }
        
        if(input.value < 0 || input.value == "0"){
            var errorMessageTwo = document.createElement('span');
            errorMessageTwo.classList.add("error-message");
            errorMessageTwo.innerHTML = '*Insira um valor maior que 0';
            div.appendChild(errorMessageTwo);
        }
    }
}

function removeError(){
    const errors = document.querySelectorAll('.error-message');

    if(errors.length != 0){
        for(c = 0; c < errors.length; c++){
        var error = errors[c];
        error.remove();
     }
    }
}