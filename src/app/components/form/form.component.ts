import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'ag-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public car: FormGroup;

  @Input()
  data: any;

  constructor(
    protected dialogRef: MatDialogRef<FormComponent>
  ) {
    this.car = new FormGroup({
      make: new FormControl(null),
      model: new FormControl(null),
      price: new FormControl(null),

    })
  }

  ngOnInit(): void {
  }

  save(event: { preventDefault: () => void; }) {
    event.preventDefault()
    console.log(this.car.controls);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}

