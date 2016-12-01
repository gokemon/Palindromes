function isPalindrome(str){
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

var myForm = document.getElementById('checkPalindromeForm');
var wordInput = document.getElementById('inputWord');
var answer = document.getElementById('yourAnswer');

myForm.addEventListener('submit', function(e){
  e.preventDefault(); 
  var userInput = wordInput.value;    
  answer.innerHTML = isPalindrome(userInput);  
});



