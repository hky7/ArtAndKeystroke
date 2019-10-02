import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryNurseryComponent } from './berry-nursery.component';

describe('BerryNurseryComponent', () => {
  let component: BerryNurseryComponent;
  let fixture: ComponentFixture<BerryNurseryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryNurseryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryNurseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
