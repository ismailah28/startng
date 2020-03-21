const name = "Ismaila Hassan";
const courses = ["HTML", "CSS", "JS", "PHP", "NODEJS"];

console.log(`Name: ${name}`);
console.log("COURSES");
courses.forEach((course, index) => console.log(`${index + 1} - ${course}`));

// Utility fuction to check if a value is even or odd
const isEven = value => {
  return value % 2 === 0 ? true : false;
};

// Utility function to display odd or even numbers depending on the length of course array
const printEvenOrOdd = (courseLength, valueArr) => {
  if (isEven(courseLength)) {
    console.log(
      `Course length is ${courseLength} - even. \nPrinting even numbers from 1 - 200 inclusive`
    );
    valueArr.forEach(value => {
      if (isEven(value)) {
        console.log(value);
      }
    });
  } else {
    console.log(
      `Course length is ${courseLength} - odd. \nPrinting odd numbers from 1 - 200 inclusive`
    );
    valueArr.forEach(value => {
      if (!isEven(value)) {
        console.log(value);
      }
    });
  }
};

// Generate number from 1 - 200 inclusive
const nums = [];

let i = 1;
while (i <= 200) {
  nums.push(i);
  i++;
}

// Run method
printEvenOrOdd(courses.length, nums);
