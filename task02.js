// sample data
const data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 }
];

// utility function for getting rate
const getRate = (principal, time) => {
  return principal >= 2500 && time > 1 && time < 3
    ? 3
    : principal >= 2500 && time >= 3
    ? 4
    : principal < 2500 || time <= 1
    ? 2
    : 1;
};

const interestCalculator = items => {
  const interestData = [];
  items.forEach((item, index) => {
    let rate = getRate(item.principal, item.time);
    items[index]["rate"] = rate;
    items[index]["interest"] = (item.principal * item.time * rate) / 100;
    interestData.push(items[index]);
  });
  console.log(interestData);
  return interestData;
};

interestCalculator(data);
