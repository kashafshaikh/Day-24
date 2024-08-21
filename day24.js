// Day 24
// ### Question 1: *Generate Fibonacci Sequence*
// Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
// *Hint:* Use a loop or recursion to build the sequence.
// *Example:*
// typescript
// generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
// generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]
function generateFibonacci(n) {
    var fib = [];
    if (n >= 1) {
        fib.push(0);
    }
    if (n >= 2) {
        fib.push(1);
    }
    for (var i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
// ### Question 2: *Replace Vowels with Asterisks*
// Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.
// *Hint:* You can use a loop or a regular expression to find and replace vowels.
// *Example:*
// typescript
// replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
// replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'
function replaceVowels(str) {
    var result = '';
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        var isVowel = false;
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        if (isVowel) {
            result += "*";
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replaceVowels('TypeScript')); // Output: 'Typ*Scr*pt'
