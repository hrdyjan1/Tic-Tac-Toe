const getRootSquare = (number: number) => Math.sqrt(number);

const checkIsInteger = (number: number) => Number.isInteger(number);

const doNothing = () => {};

const enhanceItemArray = (array: Array<any>, index: number, value: object) => Array.from(
  array, (val, id) => (id === index ? { ...val, ...value } : val),
);

function checkIsDefined<T>(x: T | undefined): x is T {
  return !(typeof x === 'undefined' || x === null);
}

function shrinkArray<T, U>(originalArray: Array<T>, length: number): Array<Array<T>> {
  return originalArray.reduce((newArray: any[], current, index) => {
    const tempArray = newArray;
    const pointer = Math.floor(index / length);
    const temporaryValue = tempArray[pointer];
    tempArray[pointer] = temporaryValue ? [...temporaryValue, current] : [current];
    return tempArray;
  }, []);
}

export {
  getRootSquare, checkIsInteger, shrinkArray, doNothing, enhanceItemArray, checkIsDefined,
};
