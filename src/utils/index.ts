export const twoCharacterFormatter = (value: number) => {
    return value <= 9 ? `0${value}` : value;
};

export const deepEqual = (
    firstObj: Record<string, string | number>,
    secondObj: Record<string, string | number>
): boolean => {
    delete firstObj.quantity;
    delete secondObj.quantity;

    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) return false;

    return firstObjKeys.every(
        (key) => secondObjKeys.includes(key) && firstObj[key] === secondObj[key]
    );
};
