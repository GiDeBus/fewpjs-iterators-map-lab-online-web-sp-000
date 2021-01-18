const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

<<<<<<< HEAD
const titleCased = () => {
  let arraySplit = tutorials.map(sentence => {
    let splitSentence = sentence.split(' ')
    let arr = splitSentence.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return arr.flat().join(' ')
  })
  return arraySplit
 }

 titleCased()
=======
function titleCased(arrOfArr) {
  let sentences = arrOfArr.split(' ');
  let upperCasing = sentences.map(word => word.charAt[0].toUpperCase() + word.slice(1))
  return upperCasing.join(' ')
}
>>>>>>> e701e6a6076420f0cb5721305a6b647de9b90030
