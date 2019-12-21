export interface Iproduct {
  orderNumber: number;
  customerNumber: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  status: string;
  comments: string;
  updateByUser: string;
}
