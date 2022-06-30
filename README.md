# [algo/fizz-buzz] FizzBuzz

## **Table of contents**

1. [Instructions](#instructions)
2. [Approach](#approach)
3. [Code](#the-code)
4. [Summary](#in-summary)
## Instructions

Display numbers between **1** and **N** by following the rules:

- if number can be divided by 3: display **Fizz** ;
- if number can be divided by 5: display **Buzz** ;
- if number can be divided by 3 **AND** 5 : display **FizzBuzz** ;
- else: display the number.

## Approach

- 🧐 Analyze the problem with the returned value
- ✏️ Write the mechanic
- ⏱ Define the chronology (what do I treat in first/last)
- 👨🏽‍💻 Let's write some code 

## The code

If you want to navigate to the code, view the [sandbox](https://codesandbox.io/s/fizzbuzz-yfv965)

In first, I have to choose the best language. But, with a view to achieving the [Frontend Test](https://github.com/fulll/developers/tree/master/Frontend), I prefer to work with [Typescript](https://www.typescriptlang.org).

My code should `handle the printing of each number between 1 and N`.

The code sould be scalable. So I wrote class, interface with his functions to do this.

### Default Class FizzBuzz

My FizzBuzz class have:
1. An array of rules: rules[] based from [RuleInterface](#interface-ruleinterface)
2. Function for pushing rules into array of rules
2. Function for generate a list of numbers 
3. Function for get replacement for each number based on the rules[]

### Interface RuleInterface

This interface check if the rule respect his conditions.

The conditions:
1. To have function matches() that handle the input number and returns boolean
2. To have function getReplacement() and returns string or number

### Class FizzRule

This class implements the [RuleInterface](#interface-ruleinterface) and returns string.

The conditions:
1. If the "number" parameter in matches() can be `divided by 3` returns true
2. If matches() returns true, getReplacement is called and returns `"Fizz"`

### Class BuzzRule

This class implements the [RuleInterface](#interface-ruleinterface) and return string.

The conditions:
1. If the "number" parameter in matches() can be `divided by 5` returns true
2. If matches() returns true, getReplacement is called and returns `"Buzz"`

### Class FizzBuzzRule

This class implements the [RuleInterface](#interface-ruleinterface) and return string.

The conditions:
1. If the "number" parameter in matches() can be `divided by 3 and by 5` returns true
2. If matches() returns true, getReplacement is called and returns `"FizzBuzz"`

## In summary: 

1. Interface [RuleInterface](#interface-ruleinterface) that check FizzRule, BuzzRule, FizzBuzzRule classes: type, function and return 
2. Classes [FizzRule](#class-fizzrule), [BuzzRule](#class-buzzrule), [FizzBuzzRule](#class-fizzbuzzrule) that respect the interface RuleInterface: threat number and return string
2. Default Class FizzBuzz that manage the output through FizzRule, BuzzRule, FizzBuzzRule classes and returns (string or number)





