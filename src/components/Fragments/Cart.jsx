import React from 'react'

const Cart = (props) => {
    const {children} = props;
  return (
    <div className='w-full bg-[#065AD7] border border-[#065AD7] rounded-lg shadow my-2 flex max-w-sm'>
      {children}
    </div>
  )
}

const ImageCart = (props) => {
    const {image} = props;
    return (
        <img src={image} alt="Gambar Cart" className='p-2 rounded-t-lg w-[80px] object-cover h-20' />
    )
}

const BodyCart = (props) => {
    const {nama, price, total, qty} = props
    return(
        <div className='p-2 w-full'>
            <div className='flex justify-between'>
                <p className='text-md text-white'>{nama.substring(0, 25)}...</p>
                <p className='text-md text-white font-bold'>{price}</p>
            </div>
            <h5 className='text-md font-semibold tracking-tight text-white'>Qty : {qty}</h5>
            <span className='text-md font-bold text-yellow-400'>Total : Rp. {total}</span>
        </div>
    )
}

const TotalCart = (props) => {
    const {title, totalAll} = props;
    return(
        <div className='p-2 w-full flex justify-between'>
            <p className='text-md text-white'>{title}</p>
            <p className='text-md text-white font-bold'>Rp. {totalAll}</p>
        </div>
    )
}

Cart.ImageCart = ImageCart;
Cart.BodyCart = BodyCart;
Cart.TotalCart = TotalCart;
export default Cart
