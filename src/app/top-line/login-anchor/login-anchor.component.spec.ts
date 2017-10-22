import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnchorComponent } from './login-anchor.component';

describe('LoginAnchorComponent', () => {
  let component: LoginAnchorComponent;
  let fixture: ComponentFixture<LoginAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
