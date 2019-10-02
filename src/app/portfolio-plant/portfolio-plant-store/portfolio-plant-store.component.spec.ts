import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPlantStoreComponent } from './portfolio-plant-store.component';

describe('PortfolioPlantStoreComponent', () => {
  let component: PortfolioPlantStoreComponent;
  let fixture: ComponentFixture<PortfolioPlantStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPlantStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPlantStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
