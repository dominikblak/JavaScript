const arr = [34, 123, 43, 323, 434, 12];
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));
const numbersBiggerThen100 = arr.filter((number) => number > 100);

const people = arr.map((number) => number + " osób");
const double = arr.map((number) => number * 2);

arr.forEach((number, index) => (arr[index] = number * 2));
