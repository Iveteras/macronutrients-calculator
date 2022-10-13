//all my variables
const gender = document.querySelectorAll('input[name="gender"]');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const activity = document.querySelector('#activity');
const goal = document.querySelector('#goal');
const button = document.querySelector('.button');
const form = document.querySelector('.data-container');
const allInputs = document.querySelectorAll('.input-bar');
const allDivs = document.querySelectorAll('.info');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    removeError();
    error();
    removeResults();
    
    for(c = 0; c <= allInputs.length - 1; c++){
        var input = allInputs[c];

        if(input.value != "" && activity.selectedIndex != 0 && goal.selectedIndex != 0){
            calculateCalories();
        }
        
        resetForm();
        return;
    }   
})














