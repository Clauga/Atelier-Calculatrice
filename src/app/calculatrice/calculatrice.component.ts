import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {

   nombre1: number = 0;
   nombre2: number = 0;
   operator?: string;
   result?: number;
  
    generateNumberOne() {
      this.nombre1 = Math.floor(Math.random() * 100);
    }
    generateNumberTwo() { 
      this.nombre2 = Math.floor(Math.random() * 100); 
    }
  selectOperator(operator: string): void {
    this.operator = operator;
  }
  calculate() {
    if (this.operator && this.operator === '+') {
      this.result = this.nombre1 + this.nombre2;
    }
    if (this.operator && this.operator === '-') {
      this.result = this.nombre1 - this.nombre2;
    }
   
    }
  }