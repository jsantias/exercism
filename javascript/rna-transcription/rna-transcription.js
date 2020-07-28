//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotide) => {
  var rna = "";
  for (let i of nucleotide) {
    switch (i) {
      case 'C':
        rna += 'G'
        break
      case 'G':
        rna += 'C'
        break
      case 'T':
        rna += 'A'
        break
      case 'A':
        rna += 'U'
        break
      default:
        rna = ''
        break
    }
  }
  return rna;
};
