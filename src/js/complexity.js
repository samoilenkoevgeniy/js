import { track } from './track_time_callback';

const countOfArrayElements = 10000000;

track(`Reduce Time arr length: ${countOfArrayElements}`, () => {
  const array = Array.from(Array(countOfArrayElements).keys())
  return array.reduce((a, b) => a + b, 0);
});

track(`For statement arr length: ${countOfArrayElements}`, () => {
  const array = Array.from(Array(countOfArrayElements).keys())
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
});

track(`Advanced For statement arr length: ${countOfArrayElements}`, () => {
  const array = Array.from(Array(countOfArrayElements).keys())
  let result = 0;
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    result += (array[i] + array[j]);
  }
  return result;
});

// setTimeout(() => {
//   window.location.reload();
// }, 1000);
