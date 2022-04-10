import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be selected product'),
    () => {
      component.selectedName = 'Produkt 1';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.innerHTML).toContain('Produkt 1');
    };
  it('should product clicked', () => {
    fixture.detectChanges();
    fixture.debugElement
      .query(By.css('mat-card'))
      .triggerEventHandler('click', null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('id');
  });

  
});
