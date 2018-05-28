import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  public products = [];
  values = '';
  

  constructor() {
  }
  onKey(value: string) {
    this.values += value + ' | ';
  }
  lookMe(event) {
    console.log(event.target.innerHTML);
    //alert(o.value);
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
