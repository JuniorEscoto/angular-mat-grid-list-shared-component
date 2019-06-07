import {Component, Input} from '@angular/core';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'componet-shared',
  styleUrls: ['componet-shared.css'],
  templateUrl: 'componet-shared.html',
})
export class ComponetShared {
  @Input() column;
  @Input() rowHeight;
  @Input() items ;
}