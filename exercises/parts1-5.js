"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
Object.defineProperty(exports, "__esModule", { value: true });
// Part 5: Import statement.
const SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Remaining variables.
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
// Part 2: Content moved into class. Output statements updated.
// Part 3: Content moved into class. Output statements updated.
// Part 4: Define your Spacecraft class:
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hours = milesAway / this.speedMph;
        return hours / 24;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Part 5: Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
//# sourceMappingURL=parts1-5.js.map