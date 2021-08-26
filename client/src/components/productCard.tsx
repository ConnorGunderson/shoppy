import { Link } from 'react-router-dom'
import { formatPrice } from '../functions'
import { Product } from '../generated'
import { useSetCurrentProduct } from '../useDispatchHooks'

interface ProductCardData {
  product: Product
}

export const ProductCard: React.FC<ProductCardData> = ({ product }) => {
  const p = product
  const setProduct = useSetCurrentProduct()
  return (
    <Link to={`/product/:${p.id}`}>
      <div
        onClick={() => setProduct(product)}
        className="p-4 hover:bg-indigo-600  border-transparent hover:shadow-xl transition-all shadow-md rounded bg-gray-100 border border-gray-200"
      >
        <h2 className="text-xl ">{p.name}</h2>
        <p>{formatPrice(p.price)}</p>
        <img alt={p.name} src={p.image} />
      </div>
    </Link>
  )
}
