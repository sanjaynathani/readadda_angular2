import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ra-layout',
  template: '<ra-header>Loading..</ra-header><ra-center>Loading...</ra-center>'
})

export class LayoutComponent implements OnInit {

  ngOnInit() {
      console.info('Loading Layout');
  }

}

