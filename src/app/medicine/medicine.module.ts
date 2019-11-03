import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MedicineRoutingModule } from "./medicine-routing.module";
import { ListComponent } from "./list/list.component";
import { AddmedicineComponent } from "./addmedicine/addmedicine.component";
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, AddmedicineComponent, ViewComponent],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicineModule {}
