function createResults(finalCal, carb, protein, fat){
    
    const resultsContainer = document.createElement('section');
    resultsContainer.classList.add("results-container");
    document.body.appendChild(resultsContainer);
     resultsContainer.innerHTML = `
     <h3 class="warning">Os dados a seguir devem ser usados como um parâmetro. Um profissional deverá ser consultado!</h3>
         
     <div class="results">
         <div class="results-flex cal">
             <h4>Calorias diárias:</h4>
             <span>${finalCal.toFixed(2)} Kcal</span>
         </div>
         
         <div class="results-flex carb">
             <h4>Carboidrato:</h4>
             <span>${carb.toFixed(2)}g</span>
         </div>
         
         <div class="results-flex prot">
             <h4>Proteina:</h4>
             <span>${protein.toFixed(2)}g</span>
         </div>
 
         <div class="results-flex fat">
             <h4>Gordura:</h4>
             <span>${fat.toFixed(2)}g</span>
         </div>
     </div>`;
 }

 function removeResults(){
    const result = document.querySelector('.results-container');

    if(result != undefined) result.remove();   
}
