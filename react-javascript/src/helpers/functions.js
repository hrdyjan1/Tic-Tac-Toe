const getRootSquare = (number) => Math.sqrt(number);

const checkIsInteger = (number) => Number.isInteger(number);

const doNothing = () => {};

const enhanceItemArray = (array, index, value) => Array.from(array,
  (val, id) => (id === index ? { ...val, ...value } : val));

function shrinkArray(array, length) {
  return array.reduce((final, current, index) => {
    const finalArray = final;
    const position = Math.floor(index / length);
    (finalArray[position] = finalArray[position] || []).push(current);
    return finalArray;
  }, []);
}

export {
  getRootSquare, checkIsInteger, shrinkArray, doNothing, enhanceItemArray,
};
