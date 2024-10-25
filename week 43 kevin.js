// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");
function drawTree(height) {
    for (let i = 1; i <= height; i++) {
      const spaces = " ".repeat(height - i);
      const stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");
function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
      const stars = "*".repeat(i);
      console.log(stars);
    }
    for (let i = size - 1; i >= 1; i--) {
      const stars = "*".repeat(i);
      console.log(stars);
    }
  }
/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");
function drawBox(width, height) {
    const topBottom = "+".repeat(width + 2);
    const side = "|" + " ".repeat(width) + "|";
  
    console.log(topBottom);
    for (let i = 0; i < height; i++) {
      console.log(side);
    }
    console.log(topBottom);
  }


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");
function isHeterogram(word) {
    const seenLetters = new Set();
    for (const letter of word) {
      if (seenLetters.has(letter)) {
        return false;
      }
      seenLetters.add(letter);
    }
    return true;
  }


/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }
  
    const letterCounts1 = new Map();
    const letterCounts2 = new Map();
  
    for (const letter of word1) {
      letterCounts1.set(letter, (letterCounts1.get(letter) || 0) + 1);
    }
  
    for (const letter of word2) {
      letterCounts2.set(letter, (letterCounts2.get(letter) || 0) + 1);
    }
  
    for (const [letter, count] of letterCounts1) {
      if (letterCounts2.get(letter) !== count) {
        return false;
      }
    }
  
    return true;
  }