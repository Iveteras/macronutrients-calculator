/*
Calculating the calories
This is the formula that i based my calculations: https://www.healthline.com/nutrition/how-to-count-macros#step-by-step

The range of calories based on your goal: https://healthyeating.sfgate.com/calories-needed-reducing-maintaining-gaining-weight-8803.html
*/

function calculateCalories(){
    var ageValue = age.value;
    var heightValue = height.value;
    var weightValue = weight.value;

    //the main formula 
    if(gender[0].checked){
        var calPerDay = (10*weightValue) + (6.25*heightValue) - (5*ageValue) + 5;
    } else {
        var calPerDay = (10*weightValue) + (6.25*heightValue) - (5*ageValue) - 161;
    }

    // calories bases on your activity level
    if(activity.selectedIndex == 1) var activityCal = calPerDay*1.2;
    if(activity.selectedIndex == 2) var activityCal = calPerDay*1.375;
    if(activity.selectedIndex == 3) var activityCal = calPerDay*1.55;
    if(activity.selectedIndex == 4) var activityCal = calPerDay*1.725;
    if(activity.selectedIndex == 5) var activityCal = calPerDay*1.9;

    // calories bases on your goal
    if(goal.selectedIndex == 1) var finalCal = activityCal-500;
    if(goal.selectedIndex == 2) var finalCal = activityCal;
    if(goal.selectedIndex == 3) var finalCal = activityCal+500;
    
    //the reason that i divided carbs and protein by 4 (4 kcal) and fat by 9 (9 kcal), its because that are the value of calorie that 1g of that macro has
    const carb = (finalCal*0.5)/4;
    const protein = (finalCal*0.3)/4;
    const fat = (finalCal*0.2)/9;

    createResults(finalCal, carb, protein, fat);
}