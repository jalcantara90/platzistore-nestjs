import { Product } from '../../products/models/product.model';
import { User } from './user.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
