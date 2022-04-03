import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoComponentComponent } from './address-info-component.component';

describe('AddressInfoComponentComponent', () => {
  let component: AddressInfoComponentComponent;
  let fixture: ComponentFixture<AddressInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
