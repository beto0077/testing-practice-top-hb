import { test, expect, describe } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

describe("capitalize", () => {
  // A capitalize function that takes a string and returns it with the first character capitalized.
  test("Capitalize dog to Dog", () => {
    expect(capitalize("dog")).toBe("Dog");
  });
  test("Capitalize car to Car", () => {
    expect(capitalize("car")).toBe("Car");
  });
  test("Capitalize sword to Sword", () => {
    expect(capitalize("sword")).toBe("Sword");
  });
  test("Capitalize already-capitalized word stays the same", () => {
    expect(capitalize("Dog")).toBe("Dog");
  });

  test("Capitalize empty string returns empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  // A reverseString function that takes a string and returns it reversed.
  test("Reverse string raw to war", () => {
    expect(reverseString("raw")).toBe("war");
  });
  test("Reverse string lore to erol", () => {
    expect(reverseString("lore")).toBe("erol");
  });
  test("Reverse string tool to loot", () => {
    expect(reverseString("tool")).toBe("loot");
  });
  test("Reverse empty string returns empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("Reverse single character returns same character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("Reverse string with spaces", () => {
    expect(reverseString("ab cd")).toBe("dc ba");
  });
});

describe("calculator", () => {
  // A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
  test("Calculator adds 3 + 4 and return 7", () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  test("Calculator subtract 12 - 5 and return 7", () => {
    expect(calculator.subtract(12, 5)).toBe(7);
  });
  test("Calculator divide 21 / 3 and return 7", () => {
    expect(calculator.divide(21, 3)).toBe(7);
  });
  test("Calculator multiply 7 * 10 and return 70", () => {
    expect(calculator.multiply(7, 10)).toBe(70);
  });
  test("Calculator divide by zero returns error message", () => {
    expect(calculator.divide(10, 0)).toBe("Error: Cannot divide by 0");
  });

  test("Calculator handles negative multiplication", () => {
    expect(calculator.multiply(-3, 4)).toBe(-12);
  });
});

describe("caesarCipher", () => {
  // A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
  // Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
  test("Caesar Cipher xyz and 3 to abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  // Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
  test("Caesar Cipher heLLo and 3 to khOOr", () => {
    expect(caesarCipher("heLLo", 3)).toBe("khOOr");
  });
  // Don’t forget to test punctuation. Punctuation, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
  test("Caesar Cipher Hello, World! and 3 to Khoor, Zruog!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("Caesar Cipher with shift 0 returns same string", () => {
    expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
  });

  test("Caesar Cipher handles negative shift", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });

  test("Caesar Cipher handles large shift values", () => {
    expect(caesarCipher("abc", 29)).toBe("def"); // 29 === 3 mod 26
  });
});

describe("analyzeArray", () => {
  // An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
  test("analyzeArray takes [10, 20, 30, 40, 50] and return { average: 30, min: 10, max: 50, length: 5 }", () => {
    expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
      average: 30,
      min: 10,
      max: 50,
      length: 5,
    });
  });
  test("works with a single-element array", () => {
    expect(analyzeArray([7])).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    });
  });
  test("handles negative numbers correctly", () => {
    expect(analyzeArray([-10, 0, 10])).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 3,
    });
  });
  test("calculates averages with decimals", () => {
    expect(analyzeArray([1, 2, 6])).toEqual({
      average: 3,
      min: 1,
      max: 6,
      length: 3,
    });
  });
  test("handles an empty array safely", () => {
    expect(analyzeArray([])).toBeNull();
  });
  test("analyzeArray handles decimal numbers", () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3,
    });
  });

  test("analyzeArray handles all equal values", () => {
    expect(analyzeArray([4, 4, 4, 4])).toEqual({
      average: 4,
      min: 4,
      max: 4,
      length: 4,
    });
  });
});
