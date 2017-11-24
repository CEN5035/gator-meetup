import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from "./guards/auth.guard";


import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { SettingsComponent } from './create-meetup-2/settings.component';
// import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
    { path: '', component: GridComponent, canActivate: [AuthGuard] },
    { path: 'home', component: GridComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotComponent },
    { path: 'create-meetup', component: CreateMeetupComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
    // { path: 'settings',  component: SettingsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
