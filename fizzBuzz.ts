/**
 * @interface RuleInterface - Interface implemented by some FizzBuzz rules
 * @typedef matches - function with one number param to handle condition for it => should return boolean
 * @typedef getReplacement - function that replace the given number by a rule (string or number)
 * @property rules - Property to FizzBuzz class
 */

 interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string | number;
}

/**
 * Rule used by default Class FizzBuzz
 * @class FizzRule - class that implements RuleInterface
 * @returns "Fizz"
 */

export class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return "Fizz";
  }
}

/**
 * Rule used by default Class FizzBuzz
 * @class BuzzRule - class that implements RuleInterface
 * @returns "Buzz"
 */

export class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return "Buzz";
  }
}

/**
 * Rule used by default Class FizzBuzz
 * @class FizzBuzzRule - class that implements RuleInterface
 * @returns "FizzBuzz"
 */

export class FizzBuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return "FizzBuzz";
  }
}

/**
 * Class that handle the rules [FizzRule, BuzzRule, FizzBuzzRule]
 * @class FizzBuzz - default class
 * @function addRule - function that push a new rule to rules property
 * @returns ["Fizz" | "Buzz" | "FizzBuzz" | number] - according to the rule
 */

export default class FizzBuzz {
  rules: RuleInterface[] = [];

  addRule(rule: RuleInterface) {
    this.rules.push(rule);
  }

  generate(number: number) {
    const output: (string | number)[] = [];

    for (let i = 1; i <= number; i++) {
      output.push(this.getReplacement(i));
    }

    return output;
  }

  getReplacement(number: number): number | string {
    for (const rule of this.rules) {
      if (rule.matches(number)) {
        return rule.getReplacement();
      }
    }
    return number;
  }
}
  const fizzBuzz = new FizzBuzz();
  fizzBuzz.addRule(new FizzBuzzRule());
  fizzBuzz.addRule(new FizzRule());
  fizzBuzz.addRule(new BuzzRule());
  const result = fizzBuzz.generate(100);  
  console.log(result.join(", "));