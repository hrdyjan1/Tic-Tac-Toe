import {
  shrinkArray,
  enhanceItemArray,
  checkIsDefined,
  checkIsInteger,
  getRootSquare,
} from '../../helpers/functions';


const originalArray = [
  { key: 0, value: 0 },
  { key: 1, value: 1 },
];
const newObject = { key: 2, value: 2 };
const modifiedArray = [{ key: 0, value: 0 }, newObject];

describe('Constants - functions', () => {
  test('Check is Integer', () => {
    const isInteger1 = checkIsInteger(10);
    const isInteger2 = checkIsInteger('10');
    const isInteger3 = checkIsInteger(0);

    expect(isInteger1).toEqual(true);
    expect(isInteger2).toEqual(false);
    expect(isInteger3).toEqual(true);
  });
  test('Get Root Square', () => {
    const five = getRootSquare(25);
    const zero = getRootSquare(0);

    expect(five).toEqual(5);
    expect(zero).toEqual(0);
  });
  test('Enhance Item Array', () => {
    const enhancedArray = enhanceItemArray(originalArray, 1, newObject);
    const enhancedArray2 = enhanceItemArray(originalArray, 100, newObject);

    expect(enhancedArray).toEqual(modifiedArray);
    expect(enhancedArray2).toEqual(originalArray);
  });
  test('Check Is Defined', () => {
    const isDefined1 = checkIsDefined(null);
    const isDefined2 = checkIsDefined(undefined);
    const isDefined3 = checkIsDefined();

    const isDefined4 = checkIsDefined('');
    const isDefined5 = checkIsDefined({});
    const isDefined6 = checkIsDefined([]);

    expect(isDefined1).toEqual(false);
    expect(isDefined2).toEqual(false);
    expect(isDefined3).toEqual(false);

    expect(isDefined4).toEqual(true);
    expect(isDefined5).toEqual(true);
    expect(isDefined6).toEqual(true);
  });
  test('Check Is Defined', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const shrinedArrayByTwo = [[1, 2], [3, 4], [5, 6], [7, 8]];
    const shrinedArrayByFour = [[1, 2, 3, 4], [5, 6, 7, 8]];

    const shrinedArray1 = shrinkArray(array, 2);
    const shrinedArray2 = shrinkArray(array, 4);

    expect(shrinedArray1).toEqual(shrinedArrayByTwo);
    expect(shrinedArray2).toEqual(shrinedArrayByFour);
  });
});
