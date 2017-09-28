import {Component} from '@angular/core';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  meetups: Object[] = [
    { name: 'Docker Meetup', count: '600', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg'},
    { name: 'Hackers Meetup', count: '800', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png'},
    { name: 'UFPT Sync Meet', count: '350', url : 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'WiCISE Meetup', count: '368', url : 'http://poracaso.com/wp-content/uploads/2017/04/George-meetup.jpg' },
    { name: 'StartUps Club Meet', count: '584', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
    { name: 'Badminton Weekly Meetup', count: '567', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'Docker Meetup', count: '600', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png' },
    { name: 'Hackers Meetup', count: '800', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg'},
    { name: 'UFPT Sync Meet', count: '350', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
    { name: 'WiCISE Meetup', count: '368', url: 'https://tctechcrunch2011.files.wordpress.com/2013/12/tc-meetups1.png' },
    { name: 'StartUps Club Meet', count: '584', url: 'http://willvideoforfood.com/wp-content/uploads/2011/07/nalts017.jpg' },
    { name: 'Badminton Weekly Meetup', count: '567', url : 'http://quantifiedself.com/wp-content/uploads/2017/04/600_459142880.jpeg' },
  ];
}
