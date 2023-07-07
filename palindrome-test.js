function isPalindrome(str) {
  const alphaNumericStr = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (alphaNumericStr.includes(str[i].toLowerCase())) {
      cleanedStr += str[i].toLowerCase();
    }
  }

  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

const inputString = "A man, a plan, a canal. Panama";
console.log(isPalindrome(inputString)); // Output: true
