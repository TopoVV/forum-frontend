import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserRegistrationComponent } from './superuser-registration.component';

describe('SuperuserRegistrationComponent', () => {
  let component: SuperuserRegistrationComponent;
  let fixture: ComponentFixture<SuperuserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
