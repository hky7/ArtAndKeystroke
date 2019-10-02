import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryHomeComponent } from './berry-home.component';

describe('BerryHomeComponent', () => {
  let component: BerryHomeComponent;
  let fixture: ComponentFixture<BerryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
