// Type Assertions in TypeScript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const theCanvas = document.getElementById('the-canvas') as HTMLCanvasElement
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    var test = format ? "$".concat(netPrice) : netPrice;
    console.log('test:', test);
    return test;
}
var price = getNetPrice(20, 0, true);
// Generics in TypeScript
// Advanced Narrowing in TypeScript
var reverse = function (value) {
    if (typeof value === 'string') {
        return value.split('').reverse().join('');
    }
    else {
        return __spreadArray([], value, true).reverse();
    }
};
console.log(reverse('123'));
console.log(reverse(['1', '2', '3']));
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
function greet(entity) {
    // if (entity instanceof Person) {
    if ('firstName' in entity) {
        console.log("Hello, ".concat(entity.firstName, " ").concat(entity.lastName));
    }
    else {
        console.log("Welcome to ".concat(entity.name));
    }
}
greet(new Person('John', 'Doe'));
greet(new Company('Acme Inc.'));
greet({ firstName: 'Jerry', lastName: 'Dow' });
greet({ name: 'Acne Co.' });
