import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObservablesComponent } from './custom-observables.component';

describe('CustomObservablesComponent', () => {
  let component: CustomObservablesComponent;
  let fixture: ComponentFixture<CustomObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
