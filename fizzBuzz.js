"use strict";
/**
 * @interface RuleInterface - Interface implemented by some FizzBuzz rules
 * @typedef matches - function with one number param to handle condition for it => should return boolean
 * @typedef getReplacement - function that replace the given number by a rule (string or number)
 * @property rules - Property to FizzBuzz class
 */
exports.__esModule = true;
exports.FizzBuzzRule = exports.BuzzRule = exports.FizzRule = void 0;
/**
 * Rule used by default Class FizzBuzz
 * @class FizzRule - class that implements RuleInterface
 * @returns "Fizz"
 */
var FizzRule = /** @class */ (function () {
    function FizzRule() {
    }
    FizzRule.prototype.matches = function (number) {
        return number % 3 === 0;
    };
    FizzRule.prototype.getReplacement = function () {
        return "Fizz";
    };
    return FizzRule;
}());
exports.FizzRule = FizzRule;
/**
 * Rule used by default Class FizzBuzz
 * @class BuzzRule - class that implements RuleInterface
 * @returns "Buzz"
 */
var BuzzRule = /** @class */ (function () {
    function BuzzRule() {
    }
    BuzzRule.prototype.matches = function (number) {
        return number % 5 === 0;
    };
    BuzzRule.prototype.getReplacement = function () {
        return "Buzz";
    };
    return BuzzRule;
}());
exports.BuzzRule = BuzzRule;
/**
 * Rule used by default Class FizzBuzz
 * @class FizzBuzzRule - class that implements RuleInterface
 * @returns "FizzBuzz"
 */
var FizzBuzzRule = /** @class */ (function () {
    function FizzBuzzRule() {
    }
    FizzBuzzRule.prototype.matches = function (number) {
        return number % 3 === 0 && number % 5 === 0;
    };
    FizzBuzzRule.prototype.getReplacement = function () {
        return "FizzBuzz";
    };
    return FizzBuzzRule;
}());
exports.FizzBuzzRule = FizzBuzzRule;
/**
 * Class that handle the rules [FizzRule, BuzzRule, FizzBuzzRule]
 * @class FizzBuzz - default class
 * @function addRule - function that push a new rule to rules property
 * @returns ["Fizz" | "Buzz" | "FizzBuzz" | number] - according to the rule
 */
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
        this.rules = [];
    }
    FizzBuzz.prototype.addRule = function (rule) {
        this.rules.push(rule);
    };
    FizzBuzz.prototype.generate = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    };
    FizzBuzz.prototype.getReplacement = function (number) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.matches(number)) {
                return rule.getReplacement();
            }
        }
        return number;
    };
    return FizzBuzz;
}());
exports["default"] = FizzBuzz;
var fizzBuzz = new FizzBuzz();
fizzBuzz.addRule(new FizzBuzzRule());
fizzBuzz.addRule(new FizzRule());
fizzBuzz.addRule(new BuzzRule());
var result = fizzBuzz.generate(100);
console.log(result.join(", "));
