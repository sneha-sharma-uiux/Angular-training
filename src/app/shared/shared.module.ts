import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    //private to local module
    AddressComponent,
    LikeComponent,
    FilterPipe,
    PowerPipe,
    SortPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //make the component, directive,pipes to other modules as public
    AddressComponent,
    LikeComponent,
    PowerPipe,
    FilterPipe,
    SortPipe,HighlightDirective
  ]
})
export class SharedModule { }
