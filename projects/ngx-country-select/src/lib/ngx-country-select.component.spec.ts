import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCountrySelectComponent } from './ngx-country-select.component';

describe('NgxCountrySelectComponent', () => {
  let component: NgxCountrySelectComponent;
  let fixture: ComponentFixture<NgxCountrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCountrySelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
