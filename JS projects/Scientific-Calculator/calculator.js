
//SELECT BUTONS
const input_element = document.querySelector('.input');
const output_operation_element = document.querySelector('.operation .value');
const output_result_element = document.querySelector('.result .value');

//VARIABLES
const OPERATORS = ["+", "-", "*", "/"]
const POWER = "POWER(",FACTORIAL = "FACTORIAL";
let data = {
    operation : [],
    formula: []
}
let ans = 0;

// CALCULATOR BUTTONS
let calculator_buttons = [
    {
        name: "rad",
        symbol: "Rad",
        formula: false,
        type: "key"
    },
    {
        name: "deg",
        symbol: "Deg",
        formula: false,
        type: "key"
    },
    {
        name: "square-root",
        symbol: "√",
        formula: "Math.sqrt",
        type: "math_function"
    },
    {
        name: "square",
        symbol: "x²",
        formula: POWER,
        type: "math_function"
    },
    {
        name: "open-parenthesis",
        symbol: "(",
        formula: "(",
        type: "number"
    },
    {
        name: "close-parenthesis",
        symbol: ")",
        formula: ")",
        type: "number"
    },
    {
        name: "clear",
        symbol: "C",
        formula: false,
        type: "key"
    },
    {
        name: "delete",
        symbol: "⌫",
        formula: false,
        type: "key"
    },
    {
        name: "pi",
        symbol: "π",
        formula: "Math.PI",
        type: "number"
    },
    {
        name: "cos",
        symbol: "cos",
        formula: "trigo(Math.cos,",
        type: "trigo_function"
    }, {
        name: "sin",
        symbol: "sin",
        formula: "trigo(Math.sin,",
        type: "trigo_function"
    }, {
        name: "tan",
        symbol: "tan",
        formula: "trigo(Math.tan,",
        type: "trigo_function"
    }, {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    }, {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    }, {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number"
    },
    {
        name: "division",
        symbol: "÷",
        formula: "/",
        type: "operator"
    },
    {
        name: "e",
        symbol: "e",
        formula: "Math.E",
        type: "number"
    },
    {
        name: "acos",
        symbol: "acos",
        formula: "inv_trigo(Math.acos,",
        type: "trigo_function"
    }, {
        name: "asin",
        symbol: "asin",
        formula: "inv_trigo(Math.asin,",
        type: "trigo_function"
    }, {
        name: "atan",
        symbol: "atan",
        formula: "inv_trigo(Math.atan,",
        type: "trigo_function"
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number"
    }, {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number"
    }, {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number"
    }, {
        name: "multiplication",
        symbol: "×",
        formula: "*",
        type: "operator"
    }, {
        name: "factorial",
        symbol: "×!",
        formula: FACTORIAL,
        type: "math_function"
    }, {
        name: "exp",
        symbol: "exp",
        formula: "Math.exp",
        type: "math_function"
    }, {
        name: "ln",
        symbol: "ln",
        formula: "Math.log",
        type: "math_function"
    }, {
        name: "log",
        symbol: "log",
        formula: "Math.log10",
        type: "math_function"
    }, {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number"
    }, {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number"
    }, {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number"
    }, {
        name: "subtraction",
        symbol: "–",
        formula: "-",
        type: "operator"
    }, {
        name: "power",
        symbol: "x<span>y</span>",
        formula: POWER,
        type: "math_function"
    }, {
        name: "ANS",
        symbol: "ANS",
        formula: "ans",
        type: "number"
    }, {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number"
    }, {
        name: "comma",
        symbol: ".",
        formula: ".",
        type: "number"
    }, {
        name: "0",
        symbol: 0,
        formula: 0,
        type: "number"
    }, {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    }, {
        name: "addition",
        symbol: "+",
        formula: "+",
        type: "operator"
    }
];


//CREATE CALC BTNS
function createCalculatorButtons() {
    const btns_per_row = 8;
    let added_btns = 0;

    calculator_buttons.forEach(button => {
        if (added_btns % btns_per_row == 0) {
            input_element.innerHTML += `<div class="row"></div>`;
        }
        const row = document.querySelector(".row:last-child");
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
        added_btns++;
    })
} 
createCalculatorButtons();

//RAD and DEG
let RADIAN = true;
const rad_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

rad_btn.classList.add("active-angle");

function angleToggler(){

    rad_btn.classList.toggle("active-angle");
    deg_btn_btn.classList.toggle("active-angle");
}


//CLICK EVENT LISTENER
input_element.addEventListener("click",event =>{
    const target_btn = event.target;
    calculator_buttons.forEach( button =>{
        if(button.name==target_btn.id)calculator(button);
    })
})

//CALCULATOR
function calculator(button){
    if(button.type == "operator"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        
    }else if(button.type == "number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        
    }
    else if(button.type == "trigo_function"){
        data.operation.push(button.symbol+"(")
        data.formula.push.apply(formula.button);
    }
    else if(button.type == "math_function"){
        let symbol,formula;
        if(button.name == "factorial"){
            symbol = "!";
            formula = button.formula;
            
            data.operation.push(symbol);
            data.formula.push(formula);
        }
        else if(button.name == "power"){
            symbol = "^(";
            formula = button.formula;
            
            data.operation.push(symbol);
            data.formula.push(formula);

        }
        else if(button.name == "square"){
            symbol = "^(";
            formula = button.formula;
            
            data.operation.push(symbol);
            data.formula.push(formula);
            
            data.operation.push("2");
            data.formula.push("2");

        }
        else{
            symbol = button.symbol + "("; 
            formula = button.formula + "("; 
            data.operation.push(symbol);
            data.formula.push(formula);
        }
    }else if(button.type == "key"){
        if(button.name=="clear"){
            data.operation=[];
            data.resultr=[];
            updteOutputResult(0);
        }else if(button.name== "delete"){
            data.operation.pop();
            data.result.pop();
        }    
    }else if(button.type == "calculate"){
        formula_str = data.formula.join('');
        let result = eval(formula_str);

        updteOutputResult(result);
    }
    updteOutputOperation(data.operation.join(''));
}

//TRIG FUNCTIONS
function trigo(callback,angle){    

}
function inv_trigotrig(callback,value){    

}



//UPDATE OUPUT
function updteOutputOperation(operation){
    output_operation_element.innertext = operation;
}

function updteOutputResult(result){
    output_result_element.innerHTML = result;
}
// GAMMA FUNCTINON 
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}
