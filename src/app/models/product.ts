export class Product {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    numberOfItemsInStock: number;
    constructor(id, categoryId, name, price = 0, numberOfItemsInStock = 0) {
      this.id = id;
      this.categoryId = categoryId;
      this.name = name;
      this.price = price;
      this.numberOfItemsInStock = numberOfItemsInStock;
    }
  }
