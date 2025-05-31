import { Product } from '../types';

export const productData: Product[] = [
  {
    id: 1,
    name: "Rocket",
    description: "Giá 50 robux, một trong những trái được ưa chuộng",
    price: 2720,
    originalPrice: 8000,
    discount: 66,
    image: "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "devil-fruits",
    categoryName: "Devil Fruit",
    rating: 5,
    reviews: 48
  },
  // ... (keeping other products but updating their images)
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Dragon",
    description: "Giá 5000 robux, với sức mạnh của một con rồng Phương Tây hoặc Phương Đông",
    price: 600000,
    originalPrice: 750000,
    discount: 30,
    image: "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "devil-fruits",
    categoryName: "Devil Fruit",
    rating: 4,
    reviews: 10
  }
];