import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryAboutComponent } from './berry-about.component';

describe('BerryAboutComponent', () => {
  let component: BerryAboutComponent;
  let fixture: ComponentFixture<BerryAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
