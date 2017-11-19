import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GridComponent} from './grid/grid.component';
import {CreateMeetupComponent} from './create-meetup/create-meetup.component';
import {MeetupDetailComponent} from './meetup-detail/meetup-detail.component';
import {SettingsComponent} from './create-meetup-2/settings.component';

const routes: Routes = [
    { path: '',  component: GridComponent },
    { path: 'home',  component: GridComponent },
    { path: 'create-meetup',  component: CreateMeetupComponent },
    { path: 'settings',  component: SettingsComponent },
    { path: 'meetup-detail/:id',  component: MeetupDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
