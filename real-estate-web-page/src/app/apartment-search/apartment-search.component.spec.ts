import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSearchComponent } from './apartment-search.component';

describe('ApartmentSearchComponent', () => {
  let component: ApartmentSearchComponent;
  let fixture: ComponentFixture<ApartmentSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentSearchComponent]
    });
    fixture = TestBed.createComponent(ApartmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
