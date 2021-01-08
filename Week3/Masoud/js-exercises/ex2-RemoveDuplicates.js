const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
const nonDuplicates = [];

function removeDuplicates(array) {
  nonDuplicates.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    const x = [];
    for (let j = 0; j < i; j++) {
      if (array[j] == array[i]) {
        x.push(array[j]);
      }
    }
    if (x.length == 0) {
      nonDuplicates.push(array[i]);
    }
  }
  return nonDuplicates;
}
console.log(removeDuplicates(letters));