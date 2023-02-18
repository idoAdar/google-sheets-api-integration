export const formatData = (values: [string[]]) => {
  return values.map((innerList: string[]) => ({
    name: innerList[0],
    age: +innerList[1] || innerList[1],
  }));
};
