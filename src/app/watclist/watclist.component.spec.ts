import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatclistComponent } from './watclist.component';

describe('WatclistComponent', () => {
  let component: WatclistComponent;
  let fixture: ComponentFixture<WatclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
