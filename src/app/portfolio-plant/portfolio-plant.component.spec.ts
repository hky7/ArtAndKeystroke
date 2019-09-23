import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPlantComponent } from './portfolio-plant.component';

describe('PortfolioPlantComponent', () => {
  let component: PortfolioPlantComponent;
  let fixture: ComponentFixture<PortfolioPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
