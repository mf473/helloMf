import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  public products = [];

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1',
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
        }]
      }, {
        label: '一级 3',
      }
    ]
  }
}
