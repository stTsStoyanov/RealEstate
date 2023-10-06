import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApartmentComponent } from './request-apartment.component';

describe('RequestApartmentComponent', () => {
  let component: RequestApartmentComponent;
  let fixture: ComponentFixture<RequestApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestApartmentComponent]
    });
    fixture = TestBed.createComponent(RequestApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
