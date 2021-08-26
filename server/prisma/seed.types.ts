export interface Order {
  email: string
  subtotal: number
  tax: number
  total: number
  created: Date
  items: []
}

export interface Product {
  name: string
  price: number
  image: string
}

export interface OrderItem {
  price: number
  product: Product
  order: Order
}

type seedTypes = 'Product' | 'Order' | 'OrderItem'
