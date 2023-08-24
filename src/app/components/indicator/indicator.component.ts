import { Component } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  steps = [
    'Welcome to the app!',
    'Fill out the form',
    'View and interact with data',
    'User authentication',
    'You are done!'
  ];

  currentStep = 0;
  stepInstructions = '';

  nextStep(ev:any) {
    this.currentStep++;
    if (this.currentStep < this.steps.length) {
      this.stepInstructions = this.steps[this.currentStep];
    }
  }
}
