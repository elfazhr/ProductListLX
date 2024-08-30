import React from 'react'
import ButtonKomponen from '../Element/Button/Index';

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className='w-full max-w-sm bg-[#065AD7] border border-[#065AD7] rounded-lg shadow mx-2 flex flex-col justify-between'>
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { titleCard, image } = props;
    return (
        <a href="">
            <div className='flex flex-row items-center p-4 gap-4'>
                <img src={image} alt="" className='w-24 h-24 rounded-full object-cover' />
                <h5 className='text-xl font-semibold tracking-light text-white'>{titleCard.substring(0,18)}...</h5>
            </div>
        </a>
    )
}

const BodyCard = (props) => {
    const { children } = props
    return (
        <div className='px-5 pb-5 h-full'>
            <a href="">
                <p className='text-white text-sm'>{children.substring(0,100)}...</p>
            </a>
        </div>
    )
}

const FooterCard = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className='flex items-center justify-between px-5 pb-5'>
            <span className='text-xl font-bold text-white'>{price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
            <ButtonKomponen classname="bg-[#6194e0]" onClick={() => handleAddToCart(id)}>Add To Cart</ButtonKomponen>
        </div>
    )
}


CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;
export default CardProduct
