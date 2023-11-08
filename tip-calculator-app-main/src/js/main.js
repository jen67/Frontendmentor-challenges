const resetButton = document.getElementById('btn');
const billAmountInput = document.getElementById('billAmount');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const tipAmount = document.getElementById('price');
const totalAmount = document.getElementById('total');
const tipOptions = document.querySelectorAll('.discounts div');
const nullNumber = document.querySelector('#checker');
const highLightborder = document.querySelector('.white-background .No-of-people .screen');

function calculateTip(customPercentage = 0) {
    const billAmount = parseFloat(billAmountInput.value);
    const numberOfPeople = parseFloat(peopleInput.value);

    if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
        tipAmount.textContent = '$0.00';
        totalAmount.textContent = '$0.00';
        return;
    }

    const tipPercentage = customPercentage / 100;
    const tipAmountPerPerson = (billAmount * tipPercentage) / numberOfPeople;
    const totalAmountPerPerson = (billAmount / numberOfPeople) + tipAmountPerPerson;

    tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
}

function checked() {
    tipOptions.forEach((option) => {
        option.addEventListener('click', () => {
            tipOptions.forEach((opt) => opt.classList.remove('checked'));
            option.classList.add('checked');
            calculateTip(parseFloat(option.textContent));
        });
    });
    customTipInput.addEventListener('input', () => {
        tipOptions.forEach((opt) => opt.classList.remove('checked'));
        calculateTip(parseFloat(customTipInput.value));
    });
}

checked();

function noNumber() {
    const inputValue = peopleInput.value;
    const isZeroOrNotDigit = inputValue === '0' || !/^\d+$/.test(inputValue);

    if (isZeroOrNotDigit) {
        nullNumber.innerHTML = "Can't be zero";
        nullNumber.style.color = 'orange';
        highLightborder.style.border = '2px solid orange';
    } else {
        nullNumber.innerHTML = '';
        nullNumber.style.color = '';
        highLightborder.style.border = '2px solid transparent';
    }
}

peopleInput.addEventListener('input', noNumber);

function updateResetButtonOpacity() {
    if (
        (billAmountInput.value.trim() !== '' && billAmountInput.value !== '0') ||
        (customTipInput.value.trim() !== '' && customTipInput.value !== '0') ||
        (peopleInput.value.trim() !== '' && peopleInput.value !== '0')
    ) {
        resetButton.style.opacity = '1';
    } else {
        resetButton.style.opacity = '0.1';
    }
}

billAmountInput.addEventListener('input', updateResetButtonOpacity);
customTipInput.addEventListener('input', updateResetButtonOpacity);
peopleInput.addEventListener('input', updateResetButtonOpacity);

updateResetButtonOpacity();

function reset() {
    billAmountInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '';
    resetButton.style.opacity = '0.1';
    tipAmount.textContent = '$0.00';
    totalAmount.textContent = '$0.00';

    nullNumber.innerHTML = '';
    nullNumber.style.color = '';
    highLightborder.style.border = '2px solid transparent';
}

resetButton.addEventListener('click', reset);


calculateTip();

billAmountInput.addEventListener('input', calculateTip);
customTipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
