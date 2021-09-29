import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.css']
})
export class TempTrackerComponent {

  tempEntered: any;
  temp_arr: any[] = [];
  @ViewChild ('name') name: any;

  constructor() { }

  insertValue() {
    if (this.name.valid) {
      this.temp_arr.push(parseFloat(this.tempEntered));
    }
  }

  get_min() {
    return this.temp_arr.length? Math.min(...this.temp_arr) : null;
  }

  get_max() {
    return this.temp_arr.length? Math.max(...this.temp_arr) : null;
  }

  get_mean() {
    return  this.temp_arr.length? this.temp_arr.reduce((acc, val) => acc + val, 0) / this.temp_arr.length : null;
  }

  get_mode() {
    return  this.temp_arr.length? this.getMode() : null;
  }

  getMode() {
    let modes: any = [], count: any = [], i, number, maxIndex = 0; 
    for (i = 0; i < this.temp_arr.length; i += 1) {
      number = this.temp_arr[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }

    for (i in count){
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }
    }
    return modes[0];
  }
}
