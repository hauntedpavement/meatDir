import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  plantList = [
    { businessCounty: 'Ashland' },
    { businessCounty: 'Ashland' },
    { businessCounty: 'Winnebago' }
  ];//from data

  countyList = Array.from(
    new Set(
      this.plantList.map((plant) => plant.businessCounty)
    )
  );
  countyCount = {};

  constructor() {
    for (let county of this.countyList) {
      this.countyCount[county] = 0;
    }

    this.plantList.forEach((plant) => {
      const { businessCounty } = plant;
      this.countyCount[businessCounty] += 1;
    });
  }

}
