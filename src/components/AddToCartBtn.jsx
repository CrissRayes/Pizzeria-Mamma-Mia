import { FaCartPlus } from 'react-icons/fa'

export const AddToCartBtn = ({ addToCart }) => {
  return (
    <>
      <button
        className='btn verde'
        onClick={addToCart}
      >
        Añadir <FaCartPlus />
      </button>
    </>
  )
}
