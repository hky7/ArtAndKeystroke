import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusProductModalComponent } from './cactus-product-modal.component';

describe('CactusProductModalComponent', () => {
  let component: CactusProductModalComponent;
  let fixture: ComponentFixture<CactusProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CactusProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
