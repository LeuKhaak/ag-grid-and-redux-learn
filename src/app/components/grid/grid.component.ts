import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CellClickedEvent, ColDef, GetRowIdFunc, GetRowIdParams, GridReadyEvent} from 'ag-grid-community';
import { Observable } from 'rxjs';
import {ModalFormComponent} from "../../modal/modal-form.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
// Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName: 'Row ID', valueGetter: 'node.id', hide: true },
    { field: 'make', width: 150, rowDrag: true},
    { field: 'model', sortable: true},
    { field: 'price', sortable: false},
    { field: 'note' },

  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: any[];
  // Observable<any[]> |
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    private http: HttpClient,
    protected dialog: MatDialog,
  ) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ =  [
      { id: 'c14', make: 'Toyota', model: 'Celica', price: 35000 },
      { id: 'c17',make: 'Ford', model: 'Mondeo', price: 32000,  },
      { id: 'c19',make: 'Porsche', model: 'Boxster', price: 72000  },
      { id: 'c24', make: 'Toyota', model: 'Prius', price: 35000 },
      { id: 'c37',make: 'Ford', model: 'Galaxy', price: 32000,  },
      { id: 'c49',make: 'Tesla', model: 'Model', price: 96000  },
    ];
    // this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.id;

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onRemoveSelected() {
    const sure = confirm("Are you sure you want to delete the selected data?");
    if (!sure) return;
    const selectedData = this.agGrid.api.getSelectedRows();
    this.agGrid.api.applyTransaction({ remove: selectedData })!;
  }

  openModalForm() {
    const dialogConfig = new MatDialogConfig();
    let column = null;
    dialogConfig.data =  'MODAL!!!';// <ModalContractModel>{entity: this.clientEntity, column: ''};
    dialogConfig.panelClass = 'dialogClass';
    this.dialog.open(ModalFormComponent, dialogConfig);
  }
}
