import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

const elementosMaterial:any = [
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
];

@NgModule({
  imports: [elementosMaterial],
  exports: [elementosMaterial]
})
export class AppMaterialModule { }