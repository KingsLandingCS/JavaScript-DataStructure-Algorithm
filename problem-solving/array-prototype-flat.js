const skywalkerCast = [
    ["Rey", "Finn", "Poe", "Rose", "Zorri", "Chewbacca", "Lando", "Leia"],
    ["Kylo Ren", "Hux"],
    ["BB-8", "D-0", "C-3PO", "R2-D2"],
];

const skywalkerFlat = skywalkerCast.flat();
console.log(skywalkerFlat);
console.log(skywalkerCast);

console.log("==============");
const testArray = ["A", ["B", "C"], ["D", ["E", "F"]]];
const testArrayFlat = testArray.flat();
console.log(testArrayFlat);

console.log("==============");

const testArrayDeepFlat = testArray.flat(2);
console.log(testArrayDeepFlat);

console.log("==============");
const testArrayDupes = ["Robot", "Pirate", ["Ninja", "Robot"]];
const testArrayDupesFlat = testArrayDupes.flat();
console.log(testArrayDupesFlat);

console.log("==============");

const testArrayDupesFlatSet = new Set


