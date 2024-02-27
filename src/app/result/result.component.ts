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
  resultImage: string = "";

  constructor(private localStorage: LocalStorageService) {
    this.result = localStorage.get("result");    
    console.log( this.result );
    this.resultImage = this.result.correctPercentage > 50 ? 'assets/images/parabens.jpg' : 'assets/images/errado.jpg';
    localStorage.clear();    
   }

}
