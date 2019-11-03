import { Component, OnInit } from "@angular/core";
import { IMedicine } from "../model/medicine";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MedicineService } from "../services/medicine.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  medicine$: Observable<IMedicine>;

  constructor(
    private route: ActivatedRoute,
    private medicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit() {
    this.medicine$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.medicineService.getMedicineById(Number.parseInt(params.get("id")))
      )
    );
  }

  editMedicine(medicine: IMedicine): void {
    this.medicine$.subscribe(medicine => {
      console.log("edit clicked");
      this.router.navigate(["medicine/edit/" + medicine.id]);
    });
  }
}
