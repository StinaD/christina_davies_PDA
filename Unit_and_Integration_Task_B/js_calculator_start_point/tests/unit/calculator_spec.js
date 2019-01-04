var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add two numbers and return result', function(){
    const number = 4;
    calculator.previousTotal = 1;
    calculator.add(number);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  it('should subtract one number from another and return result', function(){
    const number = 4;
    calculator.previousTotal = 7;
    calculator.subtract(number);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('should multiply two numbers together and return result', function(){
    const number = 5;
    calculator.previousTotal = 3;
    calculator.multiply(number);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  });

  it('should divide one number by another and return result', function(){
    const number = 7;
    calculator.previousTotal = 21;
    calculator.divide(number);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('should concatenate multiple number clicks', function (){
    const firstNumber = 4;
    const secondNumber = 3;
    const thirdNumber = 2;
    calculator.numberClick(firstNumber);
    calculator.numberClick(secondNumber);
    calculator.numberClick(thirdNumber);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 432);
  });

  it('should chain multiple operations together', function (){
    calculator.previousOperator = '+';
    calculator.previousTotal = 2;
    calculator.runningTotal = 4;
    const firstOperator = '*';
    const secondOperator = '+';
    calculator.operatorClick(firstOperator);
    calculator.operatorClick(secondOperator);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 36);
  });

  it('should clear the running total without affecting the calculation', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 10;
    calculator.runningTotal = 5;
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0);
  });

});
