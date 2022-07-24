import { useEffect, useState } from 'react'
import Products from 'api/products.json'
import ProductItem from './ui/ProductItem';

const Favorites = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Products)
  }, [])

  return (
    <div className='container mx-auto'>
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
        {product.length && product.map((product) => 
          <ProductItem key={product.id} product={product} />
        )}

      </div>
    </div>
  )
}

export default Favorites