import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteProduct} from '../../actions/cartActions'

const DeleteProduct = ({product}) => {

    const dispatch = useDispatch();


  return (
    <>
      <button onClick={()=>dispatch(deleteProduct(product))}>X</button>
    </>
  )
}

export default DeleteProduct
