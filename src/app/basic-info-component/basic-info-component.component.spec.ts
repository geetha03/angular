import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponentComponent } from './basic-info-component.component';

describe('BasicInfoComponentComponent', () => {
  let component: BasicInfoComponentComponent;
  let fixture: ComponentFixture<BasicInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
