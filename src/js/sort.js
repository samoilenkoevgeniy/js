import { track } from './track_time_callback';
import { getRandomInt } from './service/randomNumber';

const countOfArrayElements = 100000;

const arrayOfUnsortedValues = Array(countOfArrayElements).fill(1).map(item => item * getRandomInt(0, 10000));

const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      const nextIndex = i + 1;
      if (arr[i] > arr[nextIndex]) {
        const temp = arr[i];
        arr[i] = arr[nextIndex];
        arr[nextIndex] = temp;
      }
    }
  }
  return arr;
}

track(`Bubble Sort for ${countOfArrayElements}`, () => {
  const arr = arrayOfUnsortedValues;
  bubbleSort(arr);
  return true;
})

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let resultIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    resultIndex++;
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
    resultIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
    resultIndex++;
  }

  return result;
}
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.round(arr.length / 2);
  const leftHalf = [];
  const rightHalf = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      leftHalf.push(arr[i]);
    } else {
      rightHalf.push(arr[i])
    }
  }

  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);
  return merge(left, right);
};

track(`Merge Sort for ${countOfArrayElements}`, () => {
  const arr = arrayOfUnsortedValues;
  mergeSort(arr)
  return true;
});
