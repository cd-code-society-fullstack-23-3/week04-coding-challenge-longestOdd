# JavaScript Coding Challenge: Longest Odd-Length Word

### Problem Description:

You're given an array of words. Your task is to write a function `longestOddLengthWord` that returns the longest word from the array that has an odd length. If no such word exists, return an empty string.

#### Input:
- An array of strings, `words` (1 ≤ |words| ≤ 10^5), where each string represents a word (1 ≤ |word| ≤ 100).

#### Output:
- A string representing the longest odd-length word from the array. If no such word exists, return an empty string.


### Here are some examples:

```javascript
const words = ["apple", "banana", "cherry", "date", "elderberry"];

longestOddLengthWord(words);  // Expected Output: "elderberry"
```
In the example above, the word "elderberry" is the longest word with an odd length.

{Try It!}(node .guides/try-it-01.js)


```javascript
const words = ["a", "abcdefgh" ,"abc", "abcdef", "abcdefg"];

longestOddLengthWord(words);  // Expected Output: "abcdefg"
```
In the example above, the word "abcdefg" is the longest word with an odd length.

{Try It!}(node .guides/try-it-02.js)

```javascript
const words = ["dog", "cat", "bird", "elephant", "giraffe"];

longestOddLengthWord(words);  // Expected Output: "elephant"
```
In the example above, the word "elephant" is the longest word with an odd length.

{Try It!}(node .guides/try-it-03.js)

### Constraints:

- All words in the array are composed of lowercase English letters.
- If there are multiple words with the same maximum odd length, return any of them.

---

### Solve It:
node .guides/secure/longest-test.js