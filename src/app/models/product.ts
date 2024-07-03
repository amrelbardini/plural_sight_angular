export class Product {
  title!: string;
  price!: number;
  description!: string;
  image!: string;
  category!: string;
  rating = {
    rate: '',
    count: 0,
  };
}
