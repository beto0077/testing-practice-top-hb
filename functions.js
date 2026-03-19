export function capitalize(word) {
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
}

export function reverseString(userInput) {
  return userInput.split(``).reverse().join(``);
}

export const calculator = {
  // Method for addition
  add: (a, b) => a + b,

  // Method for subtraction
  subtract: (a, b) => a - b,

  // Method for multiplication
  multiply: (a, b) => a * b,

  // Method for division with zero-check
  divide: (a, b) => {
    if (b === 0) return "Error: Cannot divide by 0";
    return a / b;
  },
};

/**
 * Encodes or decodes a message using the Caesar cipher.
 *
 * @param {string} str The input string.
 * @param {number} shift The number of positions to shift each letter. Use a negative number to shift backwards (decrypt).
 * @returns {string} The resulting string.
 */
export const caesarCipher = (str, shift) => {
  // Normalize the shift value to be within the 0-25 range for simplicity
  const normalizedShift = ((shift % 26) + 26) % 26; // Handles negative shifts correctly

  return str
    .split("") // Convert the string to an array of characters
    .map((char) => {
      const charACode = char.charCodeAt(0);

      // Handle uppercase letters (ASCII 65-90)
      if (charACode >= 65 && charACode <= 90) {
        // Shift, wrap around the alphabet using modulo, and convert back to a character
        const shiftedCode = ((charACode - 65 + normalizedShift) % 26) + 65;
        return String.fromCharCode(shiftedCode);
      }

      // Handle lowercase letters (ASCII 97-122)
      if (charACode >= 97 && charACode <= 122) {
        // Shift, wrap around the alphabet using modulo, and convert back to a character
        const shiftedCode = ((charACode - 97 + normalizedShift) % 26) + 97;
        return String.fromCharCode(shiftedCode);
      }

      // Return non-alphabetic characters unchanged (e.g., spaces, punctuation)
      return char;
    })
    .join(""); // Join the array of characters back into a string
};

export function analyzeArray(nums) {
  // Guard clause for empty arrays to avoid errors like NaN or Infinity
  if (nums.length === 0) return null;

  const length = nums.length;
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  // Calculate average by summing all values and dividing by length
  const sum = nums.reduce((acc, val) => acc + val, 0);
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}
