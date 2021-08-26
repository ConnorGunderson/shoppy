import faker from 'faker'

import { Product } from './seed.types'

export const products: Product[] = Array(8)
  .fill(null)
  .map((p) => ({
    name: faker.vehicle.vehicle(),
    price: +faker.commerce.price(),
    image: faker.image.transport(),
  }))
