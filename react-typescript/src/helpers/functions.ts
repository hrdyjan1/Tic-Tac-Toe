import { ArrayOfNothingOrArrays } from "../xstate/types";

const getRootSquare = (number: number) => Math.sqrt(number);

const checkIsInteger = (number: number) => Number.isInteger(number);

const doNothing = () => {};

const enhanceItemArray = (array: Array<any>, index: number, value: object) => (
  Array.from(array, (val, id) => (id === index ? { ...val, ...value } : val))
);

// interface IterableArray {
//     [number: number] : undefined | any[] 
// }
    
function shrinkArray(originalArray: ArrayOfNothingOrArrays, length: number) {
  return originalArray.reduce((newArray: ArrayOfNothingOrArrays, current, index) => {
    const tempArray = newArray;
    const pointer = Math.floor(index / length);
    const temporaryValue = tempArray[pointer]
    tempArray[pointer] = temporaryValue ? [...temporaryValue, current] : [current];
    return tempArray;
  }, []);
}

export {
  getRootSquare, checkIsInteger, shrinkArray, doNothing, enhanceItemArray,
};
