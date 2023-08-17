import {Fragment, useContext} from 'react'
import CategoryPreview from '../category-preview/category-preview.component.jsx'
import {CategoriesContext} from '../../contexts/categories.context.jsx'

function CategoriesPreview () {
  const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment>
    {
      Object.keys(categoriesMap).map((title) => {
       const products = categoriesMap[title]
       return <CategoryPreview key={title} title={title} products={products} />
      })
      }
    </Fragment>
  )
}

export default CategoriesPreview;
