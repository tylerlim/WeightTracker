import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculaterComponent } from './bmi-calculater.component';

describe('BmiCalculaterComponent', () => {
  let component: BmiCalculaterComponent;
  let fixture: ComponentFixture<BmiCalculaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiCalculaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
