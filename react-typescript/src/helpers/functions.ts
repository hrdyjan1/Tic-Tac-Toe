const getRootSquare = (number: number) => Math.sqrt(number);

const checkIsInteger = (number: number) => Number.isInteger(number);

const doNothing = () => {};

const enhanceItemArray = (array: Array<any>, index: number, value: object) => (
  Array.from(array, (val, id) => (id === index ? { ...val, ...value } : val))
);

function shrinkArray(originalArray: Array<any>, length: number) {
  return originalArray.reduce((newArray, current, index) => {
    const tempArray = newArray;
    const pointer = Math.floor(index / length);
    tempArray[pointer] = tempArray[pointer] ? [...tempArray[pointer], current] : [current];
    return tempArray;
  }, []);
}

export {
  getRootSquare, checkIsInteger, shrinkArray, doNothing, enhanceItemArray,
};
