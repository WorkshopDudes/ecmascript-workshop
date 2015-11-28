/*
    Goal: The age of the person should increase by 10 when the ageTenYears function is called.
*/
let callFunctionXTimes = function(callback, x) {
    for (var i=0; i<x; i++) {
        callback();
    }
};

var Person = function (age) {
    this.age = age;
    var self = this;

    this.growUp = function () {
        //console.log('Growing up, age is', self.age);
        self.age ++;
    };
    this.ageTenYears = function () {
        callFunctionXTimes(this.growUp, 10);
    };
};

module.exports = Person;
