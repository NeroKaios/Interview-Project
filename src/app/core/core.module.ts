import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncatePipe} from "./pipes/truncate-text.pipe";



@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe
  ]
})
export class CoreModule { }
