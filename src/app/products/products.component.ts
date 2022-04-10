import { Component, OnInit } from '@angular/core';
import { forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import JSON from '../../assets/data.json';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductsComponent),
    },
  ],
})
export class ProductsComponent implements OnInit, ControlValueAccessor {
  public panelOpenState: boolean = false;
  public selectedName: string = '';
  public dataArray: Product[] = Object.entries(JSON)[0][1];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'question',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icon.svg')
    );
  }

  showProductDetailsInConsole(product: Product) {
    this.onTouched;
    console.log(product);
  }
  select(name: string) {
    this.onTouched;
    this.selectedName = name;
  }
  isSelected(name: string) {
    this.onTouched;
    return this.selectedName === name;
  }

  onChange!: () => void;
  onTouched!: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(obj: any): void {}

  ngOnInit(): void {}
}
