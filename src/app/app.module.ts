import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
// import {DialogService} from "./services/dialog.service";
import {ModalFormComponent} from "./modal/modal-form.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormComponent} from "./components/form/form.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GridComponent } from './components/grid/grid.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ModalFormComponent,
    FormComponent,
    GridComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AgGridModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  providers: [
    // DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
