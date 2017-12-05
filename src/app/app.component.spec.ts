import { Http, HttpModule } from '@angular/http';
import { UserService } from './providers/user.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbar,MatToolbarRow } from '@angular/material';
import {RouterTestingModule} from "@angular/router/testing";
import { CommonService } from './providers/common.service';
import { ApiService } from './providers/api.service';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpModule],
      declarations: [
        AppComponent,MatToolbar,MatToolbarRow
      ],
      providers : [CommonService,UserService,ApiService,]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Gator MeetUp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gator Meetup');
  }));

  it('login check', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // component.loginCheck();
  }));

});
