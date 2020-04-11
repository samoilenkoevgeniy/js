const months = {
  1: {
    days: 31,
    total: 0
  },
  2: {
    days: 28,
    total: 0
  },
  3: {
    days: 31,
    total: 0
  },
  4: {
    days: 30,
    total: 0
  },
  5: {
    days: 31,
    total: 0
  },
  6: {
    days: 30,
    total: 0
  },
  7: {
    days: 31,
    total: 0
  },
  8: {
    days: 31,
    total: 0
  },
  9: {
    days: 30,
    total: 0
  },
  10: {
    days: 31,
    total: 0
  },
  11: {
    days: 30,
    total: 0
  },
  12: {
    days: 31,
    total: 0
  }
};
let pointer = 1;

Object.keys(months).forEach((index) => {
  for (let i = 1; i <= months[index].days; i++) {
    months[index].total += pointer;
    console.log(months[index].total);
    pointer++;
  }
});

console.table(months);

