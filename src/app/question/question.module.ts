import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { QuestionRoutingModule } from './question-routing.module';


@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionRoutingModule,
    ReactiveFormsModule
  ],
  exports: [QuestionComponent ]
})
export class QuestionModule { 


}
