import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../providers/common.service';
import { ApiService } from '../providers/api.service';
import { UserService } from '../providers/user.service';

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
    { name: 'General' },
    { name: 'Profile' },
    { name: 'Others' },

  ];
  selectedSettingsItem: String = this.settingsItems[0]['name'];

  userDetails = null;

  constructor(private _formBuilder: FormBuilder, public common: CommonService,
    public user: UserService,
    private api: ApiService) {
    this.userDetails = user._details;
  }

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
