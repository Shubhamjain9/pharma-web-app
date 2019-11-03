import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IMedicine } from "../model/medicine";
import { MedicineService } from "../services/medicine.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  medicines: Observable<IMedicine[]> = null;

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.medicines = this.medicineService.getAllMedicine();
  }

  deleteMedicine(medicine) {
    this.medicineService.deleteMedicine(medicine);
  }

  viewMedicine(medicine: IMedicine): void {
    this.router.navigate(["medicine/view/" + medicine.id]);
  }
}
