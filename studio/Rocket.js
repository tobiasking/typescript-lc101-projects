"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var result = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            result += item.massKg;
        }
        return result;
    };
    Rocket.prototype.currentMassKg = function () {
        var result = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var astronaut = _a[_i];
            result += astronaut.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var item = _c[_b];
            result += item.massKg;
        }
        return result;
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        //    Uses this.canAdd() to see if another item can be added.
        //     If true, adds cargo to this.cargoItems and returns true.
        //     If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //repeat addCargo for astronauts
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
