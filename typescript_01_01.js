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
function sum(_a) {
    var x = _a.x, y = _a.y;
    return x + y;
}
console.log(sum({ x: 2, y: 2 }));
function log(value) {
    console.log(value);
}
// log(6)
function greet(name) {
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log('Hello Stranger');
    }
}
// greet('Bob')
// greet()
var booleanOrString = 'I could change';
booleanOrString = true;
function printId(id) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// function setProductSize(size: 'small' | 'medium' | 'large') {
function setProductSize1(size) {
    //...
    console.log(size);
}
var tshirt1 = {
    name: 'T-Shirt Design B',
    price: 12
};
var photoShoot = {
    startTime: new Date('May 9, 2009'),
    endTime: new Date('May 9, 2009'),
    name: 'Kelly Wedding Photo Shoot',
    price: 450
};
function purchaseItem(item) {
    console.log(item.price);
    return item;
}
// purchaseItem({
//     price: 1,
//     name: 'thing',
// })
// purchaseItem(tshirt1)
// purchaseItem(photoShoot)
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large"; // 2
})(Sizes || (Sizes = {}));
// console.log(Sizes)
// console.log(Sizes.small)
// console.log(Sizes[0])
function setProductSize(size) {
    console.log(size);
}
// setProductSize(Sizes.small)
var InventoryItem = /** @class */ (function () {
    function InventoryItem(name, price) {
        this.name = name;
        this.price = price;
    }
    InventoryItem.prototype.buy = function () {
        console.log(this.price);
        return this;
    };
    return InventoryItem;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, price) {
        var _this = _super.call(this, name, price) || this;
        _this.color = 'gray';
        return _this;
    }
    return Product;
}(InventoryItem));
var GreenProduct = /** @class */ (function (_super) {
    __extends(GreenProduct, _super);
    function GreenProduct(name, price) {
        var _this = _super.call(this, name, price) || this;
        _this.color = 'green';
        return _this;
    }
    return GreenProduct;
}(Product));
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(name, price, startTime, endTime) {
        var _this = _super.call(this, name, price) || this;
        _this.startTime = startTime;
        _this.endTime = endTime;
        return _this;
    }
    Service.prototype.emailBody = function () {
        return "Thank you for purchasing ".concat(this.name);
    };
    Service.prototype.emailSubject = function () {
        return "".concat(this.name, " | My Company");
    };
    return Service;
}(InventoryItem));
var tshirt = new Product('Tshirt Design B', 18);
tshirt.size = Sizes.medium;
tshirt.color = 'green';
tshirt.buy();
var videoShoot = new Service('Kelly Wedding Video Shoot', 450, new Date('May 9, 2009'), new Date('May 9, 2009'));
videoShoot.buy();
function sendEmail(emailable, to) {
    console.log('Body:', emailable.emailBody());
    console.log('Subject:', emailable.emailSubject());
    console.log('To:', to);
}
// sendEmail(tshirt, 'andy.rothwell@phila.gov')
sendEmail(videoShoot, 'andy.rothwell@phila.gov');
