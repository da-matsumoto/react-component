import React from 'react'
import SectionTitle from './SectionTitle'
import ProductList from './ProductList'

const SalesRanking = (props) => {
    return (
        <div>
            <SectionTitle label="売り上げランリング"/>
            <ProductList items={props.items}/>
        </div>
    )
}

export default SalesRanking