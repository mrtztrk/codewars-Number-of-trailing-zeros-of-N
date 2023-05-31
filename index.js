function zeros(n) {
  const result = (arrSum) => {
    let reSum = arrSum;
    let result = 0;
    for (let i in reSum) {
      result += reSum[i];
    }
    return console.log(result);
  };
  let value = n;
  let arrSum = [];
  while (value > 1) {
    value = Math.floor(value / 5);
    arrSum.push(value);
    console.log(arrSum);
    if (value === 1 || value === 0) {
      console.log(arrSum);
      return result(arrSum);
    }
  }
}
