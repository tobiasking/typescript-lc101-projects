import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name:string;
    totalCapacityKg:number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

        sumMass( items: Payload[] ): number {
         let result: number = 0;
         for (let item of items) {
              result += item.massKg;
          }
           return result;
       }
       currentMassKg(): number {
        let result: number = 0;
        for (let astronaut of this.astronauts) {
            result += astronaut.massKg;
        } 
        for (let item of this.cargoItems) {
            result += item.massKg
        }
        return result;

       }
       canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
       }
       addCargo(cargo: Cargo): boolean {
    //    Uses this.canAdd() to see if another item can be added.
    //     If true, adds cargo to this.cargoItems and returns true.
    //     If false, returns false.
    if (this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
    } else {
        return false;
    }
}
     addAstronaut(astronaut: Astronaut): boolean {
        //repeat addCargo for astronauts
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
     }
}