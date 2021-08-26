import { PrismaClient } from '@prisma/client'
import { products } from './seed.data'

const prisma = new PrismaClient()

const seed = async () => {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    })
  }
}

seed()
  .catch((e) => {
    console.log('Prisma Client Error:', e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
