// console.log("kiran");

// const task = [
//   {
//     title: "taskOne",
//     isDone: true,
//   },
//   {
//     title: "taskTwo",
//     isDone: false,
//   },
//   {
//     title: "taskThree",
//     isDone: false,
//   },
//   {
//     title: "taskFour",
//     isDone: true,
//   },
// ];

// task.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1));
// console.log(task);
// console.log(task);
const a = [true, false, true, false, false];

// a.sort(function (x, y) {
//   return x === y ? 0 : x ? -1 : 1;
// });
// // or
console.log(a);
a.sort((a, b) => (a === b ? 0 : a ? -1 : 1));

// a.sort(function (x, y) {
//   return x === y ? 0 : x ? 1 : -1;
// });
// // or
// a.sort((a, b) => (a === b ? 0 : a ? 1 : -1));

console.log(a);

// /* -------- before Sort --------- */
// [true, false, true, false, false]

// /* -------- After Sort --------- */
// [ true, true, false, false, false ]
// /* -------- before Sort --------- */
// [
//     { title: 'taskOne', isDone: true },
//     { title: 'taskTwo', isDone: false },
//     { title: 'taskThree', isDone: false },
//     { title: 'taskFour', isDone: true }
//   ]
// /* -------- After Sort --------- */
//   [
//     { title: 'taskTwo', isDone: false },
//     { title: 'taskThree', isDone: false },
//     { title: 'taskOne', isDone: true },
//     { title: 'taskFour', isDone: true }
//   ]
