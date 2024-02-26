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

  constructor(private localStorage: LocalStorageService) {
    this.result = localStorage.get("result");    
    localStorage.clear();    
   }

}
