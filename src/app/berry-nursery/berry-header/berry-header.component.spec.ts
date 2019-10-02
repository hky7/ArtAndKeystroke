import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryHeaderComponent } from './berry-header.component';

describe('BerryHeaderComponent', () => {
  let component: BerryHeaderComponent;
  let fixture: ComponentFixture<BerryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
