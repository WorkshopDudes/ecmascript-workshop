/*
    Goal: The age of the person should increase by 10 when the ageTenYears function is called.
*/
let callFunctionXTimes = function(callback, x) {
    for (var i=0; i<x; i++) {
        callback();
    }
};

let Person = function (age) {
    this.age = age;

    this.growUp = () => this.age ++;

    this.ageTenYears = function () {
        callFunctionXTimes(this.growUp, 10);
    };
};
