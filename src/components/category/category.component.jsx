import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../products-card/product-card.component';
import './category.styles.scss';

function Category() {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            {
                products && products?.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Category;
