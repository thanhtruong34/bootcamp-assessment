import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bootcamp Assessment';

  calculatorForm: FormGroup;
  sum: string | number;

  ngOnInit() {
    this.calculatorForm = new FormGroup({
      firstNum: new FormControl('', [Validators.pattern("^[0-9]*$")]),
      secondNum: new FormControl('', [Validators.pattern("^[0-9]*$")]),
    })
  }

  get firstNum(): FormControl {
    return <FormControl>this.calculatorForm.controls.firstNum;
  }

  get secondNum(): FormControl {
    return <FormControl>this.calculatorForm.controls.secondNum;
  }

  onNumberChanged() {
    let num1 = Number(this.firstNum.value);
    let num2 = Number(this.secondNum.value);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      this.sum = "";
    }
    else {
      this.sum = num1 + num2;
    }
  }

}
