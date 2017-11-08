import {Component} from '@angular/core';
import { GetMeetupsService } from './get-meetups.service';
import { Observable } from 'rxjs/Observable';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  meetups: Object[];

  constructor(public meetupsObj: GetMeetupsService) {
    this.meetupsObj.getMeetups().subscribe(temp1 => { this.meetups = temp1;} );
  }

}
