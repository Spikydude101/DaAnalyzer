// Number Analyzer
 
// HTML Elements
let numEl = document.getElementById('numInput');

 
// Add Event Listener
numEl.addEventListener('change', analyzeNumber);
 
// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    robSign("positive", "negetive", "zero");
    document.getElementById('sign').innerHTML = robSign("positive", "negative", "zero");
    document.getElementById('even-odd').innerHTML = evenishOrOddish("odd", "even");
    document.getElementById('multiple').innerHTML = multipleOf10('indeed', 'denied');
}
 
 
// Analyze Functions
function robSign(posi, negative, zeroAero) {
    let numInput = Number(numEl.value);
    if (numInput > 0) {
        return posi;
    }
    else if (numInput < 0) {
        return negative;
    }
    else {
        return zeroAero;
    }
    
}
 
 
function evenishOrOddish(oddish, evenish) {
    let numInput = Number(numEl.value);
    if (numInput % 2 == 1) {
        return oddish;
    }
    numInput = numInput * -1;
    if (numInput % 2 == 1) {
        numInput = numInput * -1;
        return oddish;
    }
    if (numInput % 2 == 0) {
        return evenish;
    }
    numInput = numInput * -1;
    if (numInput % 2 == 0) {
        numInput = numInput * -1;
        return evenish;
    }
}
 
function multipleOf10(indeed, denied) {
    let numInput = Number(numEl.value);
    if (numInput % 10 == 0) {
        return indeed;

    } else {
        return denied;
    }

 
}




