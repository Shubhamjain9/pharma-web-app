import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MedicineService } from "../services/medicine.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Medicine } from "../model/medicine";
import { switchMap } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-addmedicine",
  templateUrl: "./addmedicine.component.html",
  styleUrls: ["./addmedicine.component.css"]
})
export class AddmedicineComponent implements OnInit {
  medicineForm = this.fb.group({});
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private medicineService: MedicineService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.medicineForm.addControl("id", new FormControl(""));

    this.medicineForm.addControl(
      "medicineName",
      new FormControl("", [Validators.required])
    );

    this.medicineForm.addControl(
      "medicineDesc",
      new FormControl("", [Validators.required])
    );

    this.medicineForm.addControl(
      "quantity",
      new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
    );

    this.medicineForm.addControl(
      "price",
      new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
    );

    const medicine$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.medicineService.getMedicineById(Number.parseInt(params.get("id")))
      )
    );

    medicine$.subscribe(medicine => {
      if (!isNullOrUndefined(medicine)) {
        console.log(medicine);
        this.medicineForm.get("id").setValue(medicine.id);
        this.medicineForm.get("medicineName").setValue(medicine.medicineName);
        this.medicineForm.get("medicineDesc").setValue(medicine.medicineDesc);
        this.medicineForm.get("quantity").setValue(medicine.quantity);
        this.medicineForm.get("price").setValue(medicine.price);
      }
    });
  }

  save($event): void {
    this.formSubmitted = true;
    if (!this.medicineForm.valid) {
      return;
    }
    this.saveMedicine();
    this.router.navigate(["/medicine"]);
  }

  private saveMedicine() {
    const medicine = new Medicine();

    medicine.id = this.medicineForm.get("id").value;
    medicine.medicineName = this.medicineForm.get("medicineName").value;
    medicine.medicineDesc = this.medicineForm.get("medicineDesc").value;
    medicine.quantity = this.medicineForm.get("quantity").value;
    medicine.price = this.medicineForm.get("price").value;

    if (medicine.id == 0) {
      this.medicineService.addNewMedicine(medicine);
    } else {
      this.medicineService.updateMedicine(medicine);
    }
  }
}
