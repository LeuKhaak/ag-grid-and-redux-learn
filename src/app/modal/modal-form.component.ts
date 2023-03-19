import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {FormComponent} from "../components/form/form.component";

@Component({
  selector: 'dg-form',
  templateUrl: './modal-form.component.html',
  // styleUrls: ['./modal-form.component.scss'], // the loader scss didn't return a string
})
export class ModalFormComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public _data: string,
    protected dialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
