import React from 'react'
import { useProductsQuery } from '../generated'

import { ProductCard } from '../components/productCard'

export const HomePage: React.FC = () => {
  const { data, loading, error } = useProductsQuery()
  
  if (loading) return <div>loading...</div>

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div className="mt-10 mx-auto w-3/4">
      {/* <Link to="/create">
        <h2 className="text-2xl transition-all hover:text-blue-600">
          Create a Product
        </h2>
      </Link> */}
      <div className="mt-10 mx-auto grid grid-cols-3 gap-10">
        {data?.products.map((p, i) => (
          <ProductCard product={p} key={p.image + i} />
        ))}
      </div>
    </div>
  )
}
