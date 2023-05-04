import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {del} from '../../redux/reducer/cartslice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart);
  
  const handleRemove = (productId) => {
    dispatch(del(productId))
  }

  return (
    <div>
      <h3>CART ITEMS</h3>
      <div className='bg'>
        {
          items.map(product =>(
            <div className='cartCard'>
              <img src={product.image} alt='img'/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={()=> handleRemove(product.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart


