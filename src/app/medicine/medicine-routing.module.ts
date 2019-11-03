import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { AddmedicineComponent } from "./addmedicine/addmedicine.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "add",
    component: AddmedicineComponent
  },
  {
    path: "edit/:id",
    component: AddmedicineComponent
  },
  {
    path: "view/:id",
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule {}
