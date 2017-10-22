import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityItemComponent } from './utility-item.component';

describe('UtilityItemComponent', () => {
  let component: UtilityItemComponent;
  let fixture: ComponentFixture<UtilityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
