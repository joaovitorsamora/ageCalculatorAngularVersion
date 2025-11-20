import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeInputGroupComponent } from './age-input-group.component';

describe('AgeInputGroupComponent', () => {
  let component: AgeInputGroupComponent;
  let fixture: ComponentFixture<AgeInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeInputGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
