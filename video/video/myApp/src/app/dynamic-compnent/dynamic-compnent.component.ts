import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-compnent',
  template: `<h2>I'm dynamically attached</h2>`
})
export class DynamicCompnentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
