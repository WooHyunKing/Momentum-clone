const calculator ={

    plus : function(a,b){
        return a+b;
    },

    minus : function(a,b){
        return a-b;
    },

    multiply : function(a,b){
        return a*b;
    },

    divide : function(a,b){
        return a/b;
    },

    power : function(a,b){
        return a**b;
    }

};

const plusResult = calculator.plus(10,20);
const minusResult = calculator.minus(plusResult,10);
const multiResult = calculator.multiply(minusResult,5);
const divideResult = calculator.divide(multiResult,5);
const powerResult = calculator.power(divideResult,2);