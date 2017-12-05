import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PsersonService } from './person.service';
import { userdetail } from './person.interface';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: userdetail = {
    _id: ' ', name: ' ', UserID: ' ', Emailaddress: ' ',
    Password: ' ', Location: ' ', Hometown: ' ', Language: ' ',
    DOB: ' ', Gender: ' ', BIO: ' '
  };


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  settingsItems: Object[] = [
    { name: 'General' }

  ];
  selectedSettingsItem: String = this.settingsItems[0]['name'];

  constructor(private _formBuilder: FormBuilder, private psersonService: PsersonService) { }

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
    this.psersonService.GetUser().subscribe(res => {
      this.user = res[0];
      console.log(res);
    })

  }

  selectSetting(index: number) {
    const selectedSetting = this.settingsItems[index];
    this.selectedSettingsItem = selectedSetting['name'];
    console.log(this.selectedSettingsItem);
  }

}
