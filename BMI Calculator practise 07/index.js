function calculate() {

    let bmi;
    let category;
    let bgColor;
    let result = document.querySelector('#result');

    let weight = Number(document.querySelector('#weight').value);
    document.querySelector('#weightVal').textContent = weight + ' kg ';


    let height = Number(document.querySelector('#height').value);
    document.querySelector('#heightVal').textContent = height + ' cm ';

    bmi = (weight / Math.pow((height/100), 2)).toFixed(1);

    result.textContent = bmi;
    
    if(bmi <= 18.5){
        category = 'UnderWeight';
        bgColor = "#ffc44d";
        
    }else if(bmi >= 18.5 && bmi <= 24.9){
        category = 'Healty Weight';
        bgColor = "#0be881";

    }else if(bmi >= 25.0 && bmi <= 29.9){
        category = "Overweight";
        bgColor = "#ff884d"

    }else{
        category = "Obesity";
        bgColor = "#ff5357";
    }

    document.querySelector('#category').textContent = category;
    result.style.color = bgColor;
}