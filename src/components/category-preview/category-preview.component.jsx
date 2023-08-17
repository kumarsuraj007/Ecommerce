import React from 'react'
import ProductCard from '../products-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({title, products}) => {
  return (
    <div className="category-preview">
        <h2>
            <span className='title'>{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
            {
                products.filter((_, idx) => idx < 4)
                .map((product) => 
                <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default CategoryPreview