export interface IMedicine {
  id: number;
  medicineName: string;
  medicineDesc: string;
  quantity: number;
  price: number;
}

export class Medicine {
  id: number;
  medicineName: string;
  medicineDesc: string;
  quantity: number;
  price: number;

  constructor(
    medicineName?: string,
    medicineDesc?: string,
    quantity?: number,
    price?: number
  ) {
    this.medicineName = medicineName;
    this.medicineDesc = medicineDesc;
    this.quantity = quantity;
    this.price = price;
  }
}
