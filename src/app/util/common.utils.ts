import {Injectable, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class CommonUtils implements  OnInit {

  constructor(public datePipe: DatePipe) {}

  ngOnInit() {
    console.info('Loading UTIL');
  }

  getLocaleDate(date: string) {
    return this.datePipe.transform(new Date(date).toLocaleString(), 'MM/dd/yyyy hh:mm a');
  }
}

