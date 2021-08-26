import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/productCard'
import { Product } from '../generated'
import { RootState } from '../types'

interface ProductCardData {
  product: Product
}

export const ProductPage: React.FC<ProductCardData> = () => {
  const currentProduct = useSelector((state: RootState) => state.currentProduct)

  return (
    <div className="mt-10 mx-auto w-3/4 flex flex-col items-center justify-center">
      <Link to="/">
        <h1 className="text-red-500 text-2xl mb-10">Back to Home</h1>
      </Link>
      <ProductCard product={currentProduct} />
    </div>
  )
}
