import {useContext} from 'react'
import ProductCard from '../../components/products-card/product-card.component.jsx'
import {ProductsContext} from '../../contexts/product.context.jsx'
import './shop.styles.scss'

function Shop () {
  const {products} = useContext(ProductsContext)
  return (
    <div className='product-container'>
      {
        products?.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Shop;
