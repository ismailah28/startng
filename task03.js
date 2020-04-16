const numberDecoder = (num) => {
  let decodedNumber = [];

  let i = 1;
  while (i <= num) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      decodedNumber.push("yu-gi-oh");
    } else if (i % 2 == 0 && i % 3 === 0) {
      decodedNumber.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      decodedNumber.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      decodedNumber.push("gi-oh");
    } else if (i % 3 === 0) {
      decodedNumber.push("gi");
    } else if (i % 2 === 0) {
      decodedNumber.push("yu");
    } else if (i % 5 === 0) {
      decodedNumber.push("oh");
    } else {
      decodedNumber.push(i);
    }
    i++;
  }
  return decodedNumber;
};

console.log(numberDecoder(100));
console.log(numberDecoder(20));
