import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SIngleProduct'
import Filters from "./Filters"
import "./style.css"

const Home = () => {
   const {state: {products}} = CartState()
  return (
    <div className='home'>
        <Filters />
        <div className="productContainer">
            {
                products.map(prod => {
                    return <SingleProduct key={prod.id} prod={prod} />
                })
            }
        </div>
    </div>
  )
}

export default Home