import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  public data: any = [];

  selectedEntities: any[];

  constructor() { }

  ngOnInit() {
    this.data = [
      { name: 'John', email: 'john123@gmail.com', age: 24, city: 'Australia' },
      { name: 'David', email: 'david.420@gmail.com', age: 28, city: 'Canada' },
      { name: 'Sam', email: 'sam599sung@gmail.com', age: 27, city: 'England' },
      { name: 'Charlin', email: 'charlin.chars123@gmail.com', age: 22, city: 'Japan' },
      { name: 'Rishi', email: 'rishi.rocks123@gmail.com', age: 23, city: 'India' },
      { name: 'Kingston', email: 'king1ston@gmail.com', age: 29, city: 'China' }
    ]
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }

}
