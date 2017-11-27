import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

import { AppRoutingModule } from './app-routing.module';
import {CdkTableModule} from '@angular/cdk/table';

import { Ng4GeoautocompleteModule } from './ng4-geo-autocomplete';

import { CreateMeetUpService } from './create-meetup/create-meetup.service';
import { GetMeetupsService } from './grid/get-meetups.service';



import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { SettingsComponent } from './create-meetup-2/settings.component';
import { ShowMeetupComponent } from './show-meetup/show-meetup.component';
// import { SettingsComponent } from './settings/settings.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [ShowMeetupComponent]
})
export class AppMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CreateMeetupComponent,
    SettingsComponent
    // SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  providers: [CreateMeetUpService, GetMeetupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
