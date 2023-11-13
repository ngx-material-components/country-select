import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxCountrySelectComponent } from './npx-country-select.component';

describe('NpxCountrySelectComponent', () => {
  let component: NpxCountrySelectComponent;
  let fixture: ComponentFixture<NpxCountrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpxCountrySelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpxCountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
