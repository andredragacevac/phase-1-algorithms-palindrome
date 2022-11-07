function isPalindrome(word) {
  /*const reversedWord = reverse(word);
  return word === reversedWord;
}*/
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length -1 -i;
    if(word[i] !== word[j]) return false;
  }
  return true
}

/*function reverse(word) {
  //'abc' => 'cba'
  //const wordArray = word.split("");
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join("");
  //return reversedWord;
  return word.split("").reverse().join("");
}
*/
/* 
make a function that returns true if word is palindrome. that means if the first letter is the same
as second to last letter etc. until we reach the middle , return true

iterate from the beginning to the middle of the word
  check each character to the corresponding letter from end
    if any letters dont match, return false
return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
