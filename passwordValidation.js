// Write your student id, firstname, and lastname in a single line comment here
//65130500078
function isPasswordValid(password) {
  //write your code here...
  if(!password){
    return false
  }
  let passCount =[password]
  let letters = [...passCount.toString()] //spread array of characters
  let msg = ''
const arrPass = new Array()
const arrPop = new Array()
  for (let ch of letters) {
    msg += ch + ''
  }
   arrPass.push(msg.split(''))
console.log(msg)
console.log(arrPass);

console.log(arrPass[0][0]);
for (let index = 0; index < arrPass.length; index++) {
  if (arrPass[index][index] > 8) {
    
  }
}

 

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }

  
}
console.log(isPasswordValid(555));
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // Expected output: Array ["T", "I"]

module.exports = isPasswordValid
