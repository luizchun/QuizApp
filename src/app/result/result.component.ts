import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Result } from '../interfaces/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  {
  result: Result;
  resultImage: string = "https://www.jornaljoca.com.br/wp-content/uploads/2019/07/quiz_Parabens.jpg";

  constructor(private localStorage: LocalStorageService) {
    this.result = localStorage.get("result");    
    this.resultImage = this.result.correctPercentage > 50 ? 'assets/images/parabens.jpg' : 'assets/images/errado.jpg';
    localStorage.clear();    
   }

}
