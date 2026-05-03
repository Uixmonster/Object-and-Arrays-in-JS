'use strict';

const object = {};

console.log({ object });

const array = [
    { key: 'myKey', value: 'myValue', },
    { key: 'myKey2', value: 'myValue2', },
    { key: 'myKey3', value: 'myValue3', }
];

array.forEach(value => {
    object[value.key] = value.value;
});

const parsArray = JSON.stringify(object);

console.log({ object });
console.log({ parsArray });

const stringParse = JSON.parse(parsArray);

console.log(stringParse);