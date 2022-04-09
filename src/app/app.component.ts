import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import  JSON  from '../assets/data.json';
@Component({
  selector: 'app-root',
  template: ` <mat-card *ngFor="let item of dataArray | keyvalue; index as i " (click)=elo(dataArray[item.key])>{{dataArray[item.key].name}} 
  <mat-card-actions> 
    <mat-icon svgIcon="question" aria-hidden="false" aria-label="This is the SVG icon"></mat-icon>
    </mat-card-actions>
</mat-card>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
    },
  ],
})


export class AppComponent implements ControlValueAccessor {
  title = 'inter-app';
  panelOpenState = false;
  public objectKeys = Object.keys
  public objectEntries = Object.entries
  // public JSON = Object.keys;
  // public gaz: {[key: number];[value:string]: string} = JSON.data;
  public dataArray = Object.entries(JSON)[0][1]
  public dataForConsole = Object.entries(JSON)
  // map = new Map(JSON);
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'question',
      sanitizer.bypassSecurityTrustHtml(this.QUESTION_ICON)
    );
    console.log(this.dataArray)
    console.log(this.dataForConsole)

    // console.log(this.dataArray)
  }
  
  
  public QUESTION_ICON = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<g>
	<g>
		<path d="M45,0H5C2.25,0,0,2.25,0,5v40c0,2.75,2.25,5,5,5h40c2.75,0,5-2.25,5-5V5C50,2.25,47.75,0,45,0z M46,45
			c0,0.542-0.458,1-1,1H5c-0.542,0-1-0.458-1-1V5c0-0.542,0.458-1,1-1h40c0.542,0,1,0.458,1,1V45z"/>
		<path d="M24.733,34.318c-0.936,0-1.73,0.322-2.375,0.947c-0.645,0.627-0.968,1.414-0.968,2.338c0,1.035,0.334,1.85,1,2.429
			c0.667,0.581,1.449,0.862,2.342,0.862c0.868,0,1.631-0.297,2.295-0.881c0.656-0.582,0.988-1.395,0.988-2.41
			c0-0.924-0.32-1.711-0.953-2.338C26.439,34.641,25.657,34.318,24.733,34.318z"/>
		<path d="M30.896,8.772c-1.631-0.791-3.51-1.18-5.629-1.18c-2.295,0-4.294,0.473-6.005,1.401c-1.718,0.943-3.026,2.126-3.919,3.562
			C14.45,13.978,14,15.394,14,16.787c0,0.67,0.281,1.295,0.848,1.889c0.561,0.565,1.258,0.861,2.076,0.861
			c1.395,0,2.342-0.832,2.844-2.488c0.527-1.574,1.172-2.777,1.935-3.59c0.762-0.817,1.946-1.225,3.564-1.225
			c1.377,0,2.502,0.406,3.375,1.205c0.871,0.813,1.31,1.802,1.31,2.98c0,0.602-0.147,1.16-0.429,1.66
			c-0.289,0.515-0.643,0.984-1.055,1.397c-0.419,0.425-1.103,1.047-2.039,1.866c-1.072,0.941-1.922,1.743-2.548,2.428
			c-0.632,0.686-1.138,1.464-1.522,2.382c-0.378,0.9-0.57,1.959-0.57,3.199c0,0.975,0.259,1.721,0.783,2.217
			c0.519,0.496,1.162,0.75,1.923,0.75c1.464,0,2.334-0.768,2.62-2.293c0.161-0.713,0.28-1.211,0.358-1.506
			c0.084-0.281,0.192-0.562,0.342-0.857c0.149-0.281,0.375-0.602,0.675-0.945c0.294-0.345,0.698-0.736,1.194-1.203
			c1.805-1.61,3.051-2.753,3.75-3.438c0.697-0.672,1.299-1.486,1.803-2.43C35.744,18.705,36,17.609,36,16.362
			c0-1.574-0.441-3.05-1.333-4.388C33.777,10.621,32.521,9.55,30.896,8.772z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;


  elo(x: object) {
    this.onTouched;
    console.log(x)

  };

  onChange!: () => void;
  onTouched!: () => void

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(obj: any): void {}
}
