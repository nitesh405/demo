import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dilogue',
  templateUrl: './dilogue.component.html',
  styleUrls: ['./dilogue.component.css']
})
export class DilogueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
