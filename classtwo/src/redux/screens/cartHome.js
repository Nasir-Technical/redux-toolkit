import React from 'react'
import Products from '../../Components/products';


const CartHome = () =>{
    return(
        <div>
            <h1>Welcome to my store</h1>
            <section>
                <h3>All products</h3>
                <Products />
            </section>
        </div>
    )
}

export default CartHome;