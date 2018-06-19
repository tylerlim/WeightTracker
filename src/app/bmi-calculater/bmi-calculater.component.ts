import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bmi-calculater',
  templateUrl: './bmi-calculater.component.html',
  styleUrls: ['./bmi-calculater.component.css']
})
export class BmiCalculaterComponent implements OnInit {
  @Input() weight: number;
  @Input() Height: number;
  @Output() Bmi: number;
  // : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.weight = 0;
    this.Height = 0;
    this.Bmi = 0;
  }

   Calculate(weight: HTMLInputElement, height: HTMLInputElement): boolean {
     this.Bmi = (parseFloat(weight.value) / ((parseFloat(height.value) * (parseFloat(height.value)))));
    return false;
  }

}
