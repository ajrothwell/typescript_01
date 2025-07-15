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
var InventoryItem = /** @class */ (function () {
    function InventoryItem(name, price) {
        this.name = name;
        this.price = price;
    }
    InventoryItem.prototype.buy1 = function () {
        console.log('name:', this.name, 'price:', this.price);
        return this;
    };
    return InventoryItem;
}());
var phone = new InventoryItem('wawa', 1000);
phone.buy1();
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large";
})(Sizes || (Sizes = {}));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, price, color, size) {
        var _this = _super.call(this, name, price) || this;
        _this.color = 'white';
        _this.color = color;
        _this.size = size;
        return _this;
    }
    Product.prototype.buy = function () {
        console.log(this.name, this.price, this.color, Sizes[this.size]);
    };
    return Product;
}(InventoryItem));
var product = new Product('phone', 1000, 'black', Sizes.medium);
var product1 = new Product('cellphone', 1000, 'black', Sizes.medium);
product.buy();
product1.buy();
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(name, price, startTime, endTime) {
        var _this = _super.call(this, name, price) || this;
        _this.startTime = startTime;
        _this.endTime = endTime;
        return _this;
    }
    Service.prototype.emailBody = function () {
        return 'you started at ' + this.startTime;
    };
    Service.prototype.emailSubject = function () {
        return 'your service: ' + this.name;
    };
    return Service;
}(InventoryItem));
var lunch = new Service('tuesday lunch', 15, new Date('3/12/2024'), new Date('3/12/2024'));
lunch.buy1();
function sendEmail(e, to) {
    console.log(e.emailBody(), e.emailSubject(), to);
}
sendEmail(lunch, 'andy.rothwell@phila.gov');
