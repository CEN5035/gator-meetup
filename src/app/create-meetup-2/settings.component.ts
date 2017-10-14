import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  settingsItems: Object[] = [
    { name: 'General'},
    { name: 'Profile'},
   ];
  selectedSettingsItem: String = this.settingsItems[0]['name'];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  selectSetting(index: number) {
    const selectedSetting = this.settingsItems[index];
    this.selectedSettingsItem = selectedSetting['name'];
    console.log(this.selectedSettingsItem);
  }

}
