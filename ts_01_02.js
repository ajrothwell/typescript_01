var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function emailBody1() {
    return 'body';
}
function emailSubject1() {
    return 'subject';
}
var email2 = {
    emailBody: function () { return 'test'; },
    emailSubject: function () { return 'test2'; }
};
function sendEmail2(emailable, to) {
    console.log(emailable.emailBody());
    console.log(emailable.emailSubject());
    console.log(to);
}
sendEmail2(email2, 'Bob');
var Sizes2;
(function (Sizes2) {
    Sizes2[Sizes2["tiny"] = 0] = "tiny";
    Sizes2[Sizes2["normal"] = 1] = "normal";
    Sizes2[Sizes2["huge"] = 2] = "huge";
})(Sizes2 || (Sizes2 = {}));
// console.log(Sizes2);
console.log(Sizes2.tiny);
console.log(Sizes2[Sizes2.tiny]);
var InventoryItem2 = /** @class */ (function () {
    function InventoryItem2(name, price) {
        this.name = name;
        this.price = price;
    }
    InventoryItem2.prototype.buy = function () {
        console.log(this.name, this.price);
    };
    return InventoryItem2;
}());
var watermelon = new InventoryItem2('new watermelon', 2);
console.log(watermelon.name);
watermelon.buy();
var Product2 = /** @class */ (function (_super) {
    __extends(Product2, _super);
    function Product2(name, price, color, size) {
        var _this = _super.call(this, name, price) || this;
        _this.color = 'red';
        _this.color = color;
        _this.size = size;
        return _this;
    }
    Product2.prototype.buy2 = function () {
        console.log(this.name, this.price, this.color, Sizes2[this.size]);
    };
    return Product2;
}(InventoryItem2));
var hugeWatermelon = new Product2('huge watermelon', 5, 'green', Sizes2.huge);
hugeWatermelon.buy2();
