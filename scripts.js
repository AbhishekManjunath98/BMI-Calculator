function getInputValue() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmiCalculate = weight / ((height * height) / 10000);
    var bmi = bmiCalculate.toFixed(2);

    var documentH3 = document.getElementById('h3');
    var documentH2 = document.getElementById('h2');

    if (bmi < 18.5) {
        var innerText = 'your body to mass ratio is ' + bmi;
        var bmiRangeText = 'you are underweight';
        documentH3.innerHTML = innerText;
        documentH2.innerHTML = bmiRangeText;
        documentH2.style.color = '#FEB132';
    }

    else if (bmi >= 18.5 && bmi < 25) {
        var innerText = 'your body to mass ratio is ' + bmi;
        var bmiRangeText = 'you are normal';
        documentH3.innerHTML = innerText;
        documentH2.innerHTML = bmiRangeText;
        documentH2.style.color = '#30A232';
    }

    else if (bmi >= 25 && bmi < 30) {
        var innerText = 'your body to mass ratio is ' + bmi;
        var bmiRangeText = 'you are overweight';
        documentH3.innerHTML = innerText;
        documentH2.innerHTML = bmiRangeText;
        documentH2.style.color = '#e96024';
    }

    else if (bmi >= 30) {
        var innerText = 'your body to mass ratio is ' + bmi;
        var bmiRangeText = 'you are obese';
        documentH3.innerHTML = innerText;
        documentH2.innerHTML = bmiRangeText;
        documentH2.style.color = 'red';
    }

}