import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, HttpModule} from '@angular/http';
import { EditComponent } from './edit.component';
import {MatCardTitle,MatCardContent, MatCard} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../providers/user.service';



describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent,MatCardTitle, MatCardContent ,MatCard ],
      imports: [FormsModule, RouterModule,RouterTestingModule, HttpModule],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
