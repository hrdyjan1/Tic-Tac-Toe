const getRootSquare = (number: number) => Math.sqrt(number);

const checkIsInteger = (number: number) => Number.isInteger(number);

const doNothing = () => {};

const enhanceItemArray = (array: Array<object>, index: number, value: object) =>
  Array.from(array, (val, id) => (id === index ? { ...val, ...value } : val));

function shrinkArray(originalArray: Array<any>, length: number) {
  return originalArray.reduce((newArray, current, index) => {
    const pointer = Math.floor(index / length);
    newArray[pointer] = newArray[pointer] ? [...newArray[pointer], current] : [current];
    return newArray;
  }, []);
}

export { getRootSquare, checkIsInteger, shrinkArray, doNothing, enhanceItemArray };
