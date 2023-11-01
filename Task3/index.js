const weight = document.getElementById('input_weight');
const height = document.getElementById('input_height');
const button = document.getElementById('push');
const resultText = document.getElementById('result');


function calculateBMI() {
    const heightValue = parseFloat(height.value) / 100;
    const heightValue2 = Math.pow(heightValue, 2);
    let resultBmi = parseFloat(weight.value) / heightValue2;
    let resRound = Math.round(resultBmi);
    resultText.textContent = `Индекс массы тела (ИМТ): ${resRound}`;
    weight.value = '';
    height.value = '';
} //Расчет ИМТ (индекс массы тела), не уверена, правильно ли сделала разделив на 100 значение роста.

button.addEventListener('click', calculateBMI);

