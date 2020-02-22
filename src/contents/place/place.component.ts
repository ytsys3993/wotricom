import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  structData:any;
  areas: any;

  constructor() { }

  ngOnInit() {

    this.structData = require("../../data/struct.json");
    this.areas = this.structData.prefectures;
  }

}