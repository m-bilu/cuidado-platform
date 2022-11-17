import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLoginComponent } from './profile-login.component';

describe('ProfileLoginComponent', () => {
  let component: ProfileLoginComponent;
  let fixture: ComponentFixture<ProfileLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
