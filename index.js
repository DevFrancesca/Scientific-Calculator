// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme') || 'light';
  
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     toggleButton.addEventListener('click', () => {
//       let theme = document.documentElement.getAttribute('data-theme');
//       if (theme === 'light') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//       }
//     });
//   });

let displayValue = " ";
let display1 = document.getElementById("screen1") ;
let display2 = document.getElementById("screen2") ;

function sendToScreen(character) {
    displayValue += character ;
    display1.value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        display2.value = displayValue ;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}

function calculatePercent() {
    try {
        displayValue = eval(displayValue + "/100");
        display2.value = displayValue ;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}


function clearDisplay() {
    displayValue = " ";
    display1.value = displayValue ;
    display2.value = displayValue ;
} 

function backspace() {
    displayValue = displayValue.slice(0,-1);
    display1.value = displayValue;
}

function calculateLog() {
    try {
        displayValue = eval(Math.log10(displayValue));
        display2.value = displayValue ;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}

function calculateSqrt() {
    try {
        displayValue = eval(Math.sqrt(displayValue));
        display2.value = displayValue ;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}

function calculatePi() {
  displayValue  += Math.PI;
  display1.value = displayValue;
} 


function calculateSine() {
    try {
        let radian = eval((displayValue*Math.PI)/180);
        displayValue = Math.sin(radian);
        display2.value = displayValue;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}

function calculateCosine() {
    try {
        let radian = eval((displayValue*Math.PI)/180);
        displayValue = Math.cos(radian);
        display2.value = displayValue;
    }

    catch (error) {
        display2.value = "Error" ;
    }
}

function calculateTangent() {
    try {
        let radian = eval((displayValue*Math.PI)/180);
        displayValue = Math.tan(radian);
        display2.value = displayValue;
    }

    catch (error) {
        display2.value = "Error";
}
}
