import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFlexComponent } from './button-flex.component';

describe('ButtonFlexComponent', () => {
  let component: ButtonFlexComponent;
  let fixture: ComponentFixture<ButtonFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
