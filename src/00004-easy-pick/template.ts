type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js
// function myPick(T, K) {
//   const obj = {};
//   K.forEach((key) => {
//     if (key in T) {
//       obj[key] = T[key];
//     }
//   });

//   return obj;
// }
