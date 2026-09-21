import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerHttpComponent } from './customer-http-component';

describe('CustomerHttpComponent', () => {
  let component: CustomerHttpComponent;
  let fixture: ComponentFixture<CustomerHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerHttpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerHttpComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
