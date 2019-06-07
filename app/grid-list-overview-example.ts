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
  public colValue = 2;
  public rowValue = 100;
  public values =  [
    {colspan: 1, rowspan: 1, value: 1},
    {colspan: 1, rowspan: 1, value:2},
    {colspan: 1, rowspan: 1, value:3},
    {colspan: 1, rowspan: 1, value: 4}]

     public items =  [
    {colspan: 1, rowspan: 1, value: 1},
    {colspan: 1, rowspan: 1, value:2},
    {colspan: 1, rowspan: 1, value:3},
    {colspan: 1, rowspan: 1, value: 4},
    {colspan: 1, rowspan: 1, value: 4},
    {colspan: 1, rowspan: 1, value: 4}]
}



/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */