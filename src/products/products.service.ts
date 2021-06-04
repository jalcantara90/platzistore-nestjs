import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './models/product.model';



@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
        "id": 1,
        "name": "cargador",
        "price": 18
    },
    {
        "id": 2,
        "name": "ratón",
        "price": 70
    },
    {
        "id": 3,
        "name": "teclado",
        "price": 180
    }
  ];

  findOne(id: number) {
    const productFinded = this.products.find((p: Product) => p.id == id);

    if (!productFinded) throw new NotFoundException();

    return { success: true, product: productFinded };
  }

  getAll(query: any) {
    return {
      success: true,
      products: this.products
    }
  }

  create(payload: any) {
    const newProduct = { id: this.products.length + 1, ...payload };
    this.products = [...this.products, newProduct];

    return { success: true, product: newProduct };
  }

  update(id: number, payload: any) {
    console.log(id);
    this.products = this.products.map((p: Product) => {
      if (p.id == id) {
        p = { ...p, ...payload };
      }

      return p;
    });
    console.log(this.products)
    return this.findOne(id);
  }

  delete(id: number) {
    this.products = this.products.filter((p: Product) => p.id != id);
    return { success: true };
  }

}
