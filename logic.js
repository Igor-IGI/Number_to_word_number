function getNumber(event) {
    event.preventDefault();

    var numberInput = document.getElementById('numberInput').value;


    var number = convertNumberToWord(numberInput);
    console.log(number);
}

function convertNumberToWord(number) {

    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let words = '';

    const thousands = Math.floor(number / 1000);
    if (thousands > 0) {
        words += units[thousands] + 'Thousand';
    }

    const hundreds = Math.floor((number % 1000) / 100);
    if (hundreds > 0) {
        words += units[hundreds] + 'Hundred';
    }

    const tensAndUnits = number % 100;
    if (tensAndUnits > 0) {
        if (tensAndUnits < 10) {
            words += units[tensAndUnits];
        } else if (tensAndUnits < 20) {
            words += teens[tensAndUnits - 10];
        } else {
            const tensDigit = Math.floor(tensAndUnits / 10);
            const unitsDigit = tensAndUnits % 10;
            words += tens[tensDigit] + (unitsDigit > 0 ? '' + units[unitsDigit] : '');
        }
    }
    return words.trim();
}

window.addEventListener('submit', getNumber)