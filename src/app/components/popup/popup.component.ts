import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DilogueComponent } from '../dilogue/dilogue.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() currentStep: number = 0;
  @Input() stepInstructions: string = '';
  @Output() nextStep = new EventEmitter<void>();


  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DilogueComponent, {
      data: {
        animal: 'panda'
      },
      width:"30%",
      position:{left:"70%"}
    });
  }
}
