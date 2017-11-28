import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductContainerComponent } from './modal-product-container.component';

describe('ModalProductContainerComponent', () => {
  let component: ModalProductContainerComponent;
  let fixture: ComponentFixture<ModalProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
