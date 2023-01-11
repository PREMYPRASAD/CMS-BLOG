import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuperadminComponent } from './login-superadmin.component';

describe('LoginSuperadminComponent', () => {
  let component: LoginSuperadminComponent;
  let fixture: ComponentFixture<LoginSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSuperadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
