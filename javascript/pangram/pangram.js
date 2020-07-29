//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  if (sentence.split('').length === 0) return false
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  sentence = sentence.toLowerCase().match(/[a-z]/g)

  sentence.forEach(c => {
    alphabet = alphabet.filter(element => element !== c);
  });

  return (alphabet.length <= 0) ? true : false
};
