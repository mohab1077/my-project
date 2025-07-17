
import { faker } from "@faker-js/faker";
import type { iproduct } from "../interfaces/iproduct";

// ** Array (15) of Object(Product), each product contains title, description, price
// ** faker.commerce.productName()

const PRODUCT_LENGTH = 15;
export const fakedate: iproduct[] = Array.from(
  { length: PRODUCT_LENGTH },
  () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    des: faker.commerce.productDescription(),
    price: +faker.commerce.price(),
    image: faker.image.urlPicsumPhotos(),
    categ: faker.commerce.department(),
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
  }),
);