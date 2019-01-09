import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule, 
  MatExpansionModule,
  MatListModule, 
  MatTableModule,
  MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ],
})
export class SharedModule { }
