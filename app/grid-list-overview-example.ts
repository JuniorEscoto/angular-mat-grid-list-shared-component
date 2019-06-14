import {Component} from '@angular/core';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview-example',
  styleUrls: ['grid-list-overview-example.css'],
  templateUrl: 'grid-list-overview-example.html',
})
export class GridListOverviewExample {
  public col = 4;
  public rowHeight = 100;
  public values =  [
    {colspan: 1, rowspan: 1, value: 'a'},
    {colspan: 1, rowspan: 1, value:'b'},
    {colspan: 1, rowspan: 1, value: 'c'},
    {colspan: 1, rowspan: 1, value: 'd'},
    {colspan: 1, rowspan: 1, value: 'e'},
    {colspan: 1, rowspan: 1, value:'f'},
    {colspan: 1, rowspan: 1, value:'g'},
    {colspan: 1, rowspan: 1, value: 'h'}]
}



/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */