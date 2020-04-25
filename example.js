var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function log(a) {
    console.log(a);
}
var a = "Hello World";
log(a);
var mybool = true;
console.log(mybool);
var var1 = ["Sachin", "Magar"];
console.log(var1);
//declare function create(o:object | null):void;
//create({prop:0})
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["orange"] = 1] = "orange";
    color[color["green"] = 2] = "green";
    color[color["yellow"] = 3] = "yellow";
})(color || (color = {}));
var clr = color.green;
console.log(clr);
function display() {
    for (var i = 1; i <= 2; i++) {
        console.log("Welcome to edurekha #:" + i);
    }
    //console.log("Final value of i is:"+i)
}
display();
var arrfun = function () { return console.log("Hello.."); };
arrfun();
var myClass = /** @class */ (function () {
    function myClass(k) {
        this.var1 = k;
    }
    return myClass;
}());
var myChild = /** @class */ (function (_super) {
    __extends(myChild, _super);
    function myChild(num) {
        return _super.call(this, num) || this;
    }
    myChild.prototype.display = function () {
        console.log(this.var1);
    };
    return myChild;
}(myClass));
var obj = new myChild(007);
obj.display();
