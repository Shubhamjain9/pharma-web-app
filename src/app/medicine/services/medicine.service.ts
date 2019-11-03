import { Injectable } from "@angular/core";
import { Medicine, IMedicine } from "../model/medicine";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MedicineService {
  private medicines: Array<Medicine> = [
    {
      id: 1,
      medicineName: "A",
      medicineDesc: "This is A Medicine",
      quantity: 1,
      price: 10
    },
    {
      id: 2,
      medicineName: "B",
      medicineDesc: "This is B Medicine",
      quantity: 2,
      price: 20
    },
    {
      id: 3,
      medicineName: "C",
      medicineDesc: "This is C Medicine",
      quantity: 3,
      price: 30
    },
    {
      id: 4,
      medicineName: "D",
      medicineDesc: "This is D Medicine",
      quantity: 4,
      price: 40
    },
    {
      id: 5,
      medicineName: "E",
      medicineDesc: "This is E Medicine",
      quantity: 5,
      price: 50
    }
  ];

  constructor() {}

  getAllMedicine(): Observable<IMedicine[]> {
    return of(this.medicines);
  }

  getMedicineById(id: number): Observable<IMedicine> {
    var medicine = this.medicines.find(item => item.id === id);
    return of(medicine);
  }

  addNewMedicine(medicine: IMedicine): void {
    medicine.id = this.medicines.length + 1;
    this.medicines.push(medicine);
  }

  deleteMedicine(medicine: IMedicine): IMedicine[] {
    const index = this.medicines.findIndex(item => item.id === medicine.id);
    const deletedItem = this.medicines.splice(index, 1);
    return deletedItem;
  }

  updateMedicine(medicine: IMedicine): void {
    const index = this.medicines.findIndex(item => item.id === medicine.id);
    this.medicines[index] = medicine;
  }
}
