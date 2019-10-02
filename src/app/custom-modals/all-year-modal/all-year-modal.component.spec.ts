import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYearModalComponent } from './all-year-modal.component';

describe('AllYearModalComponent', () => {
  let component: AllYearModalComponent;
  let fixture: ComponentFixture<AllYearModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllYearModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
