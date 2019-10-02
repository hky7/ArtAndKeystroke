import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryContactComponent } from './berry-contact.component';

describe('BerryContactComponent', () => {
  let component: BerryContactComponent;
  let fixture: ComponentFixture<BerryContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
