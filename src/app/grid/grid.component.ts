import {Component, OnInit} from '@angular/core';
import { GetMeetupsService } from './get-meetups.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap, startWith
} from 'rxjs/operators';


/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  meetups$: Observable<Object>;
  private searchTerms = new Subject<string>();

  constructor(public meetupsService: GetMeetupsService) {
    this.meetups$ = meetupsService.getMeetups();
  }

  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }


  onRowClicked(id: string): void {
    console.log(id);
  }

  ngOnInit(): void {
    this.meetups$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // retrieve all items initially
      startWith(''),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.meetupsService.searchMeetups(term)),
    );
  }
}
