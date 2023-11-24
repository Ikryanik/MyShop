import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPositionComponent } from './cart-position.component';

describe('CartPositionComponent', () => {
  let component: CartPositionComponent;
  let fixture: ComponentFixture<CartPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPositionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
