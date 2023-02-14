"use strict";
exports.__esModule = true;
function addTwo(num) {
    //   num.toUppercase();
    return num + 2;
}
function getUpper(name, email, id, idpaid) {
    if (idpaid === void 0) { idpaid = false; }
    return name.toUpperCase();
}
addTwo(5);
getUpper("hello", "abc", 1);
