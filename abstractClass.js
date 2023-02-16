"use strict";
// abstract class is similar to interfaces
// objects cannot be created from a abstract class
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
exports.__esModule = true;
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
// const test = new TakePhoto("auto", "test"); // Cannot create an instance of an abstract class.
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    // if you want to use the constructor of the parent class, you need to use super keyword to call the constructor of the parent class.
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    // this method is mandatory to be implemented in the child class as it is abstract in the parent class.
    Instagram.prototype.getdata = function () {
        console.log("get data");
    };
    return Instagram;
}(TakePhoto));
var ashwin = new Instagram("auto", "test", 10);
