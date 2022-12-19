// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {
//  car = []

// }


import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  car = ["bmw", "bmw2"]
  constructor() { }
  getCar(){
    return [...this.car]
  }
  addCar(name: string) {
    this.car.push(name)
  }
}

