import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { IonicModule } from '@ionic/angular';
import { Result } from '../interfaces/result';


@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    IonicModule,
    ResultRoutingModule
  ]
})
export class ResultModule {
  result: Result | undefined; 
  
 }
