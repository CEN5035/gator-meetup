import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GridComponent} from './grid/grid.component';
import {CreateMeetupComponent} from './create-meetup/create-meetup.component';

const routes: Routes = [
    { path: '',  component: GridComponent },
    { path: 'home',  component: GridComponent },
    { path: 'create-meetup',  component: CreateMeetupComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
