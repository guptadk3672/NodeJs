// // asynch. data

// let a = 10;
// let b = 0;

// setTimeout(() => {
//   b = 20;
// }, 2000);

// console.log("Sum is ------>", a + b);     // output --- 10

// Handling asynch. data with promise

let a = 10;
let b = 0;

const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log("Sum is ------>", a + b); // output --- 30
});
