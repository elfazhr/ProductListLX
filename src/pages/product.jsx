import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import ButtonKomponen from '../components/Element/Button/Index'
import Cart from '../components/Fragments/Cart'
import { getProducts } from '../services/product'

// const products = [
//   {
//     id: 1,
//     name: "Tas Wanita",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit eos, et debitis iusto dolorem incidunt? Architecto laborum, minima eius asperiores ex nam quos fuga, omnis voluptates, nulla possimus? Hic.",
//     price: 19000000
//   },
//   {
//     id: 2,
//     name: "Tas Pria",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit eos, et debitis iusto dolorem incidunt?.",
//     price: 20000000
//   },
//   {
//     id: 3,
//     name: "Baju Pria",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 8000000
//   },
//   {
//     id: 4,
//     name: "Baju Pria",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 8000000
//   },
//   {
//     id: 5,
//     name: "Baju Pria",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 8000.000
//   },
//   {
//     id: 6,
//     name: "Baju Pria",
//     image: "/img/bag_1.jpg",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 8000000
//   },
// ]
const email = localStorage.getItem("email")
const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const totalPriceRef = useRef(null)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  },[cart, products])

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "block"
    } else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  })

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  }
  return (
    <>
      <div className='flex justify-end h-20 bg-gray-500 text-white items-center px-10'>
        {email}
        <ButtonKomponen classname="bg-stone-700 ml-5" onClick={handleLogout}>Logout</ButtonKomponen>
      </div>
      <div className='flex md:flex-row flex-col md:items-start items-center '>
        <div className='flex justify-center py-5 flex-wrap gap-5 md:w-4/6 w-full'>
          {
            products.length > 0 && products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.HeaderCard image={product.image} titleCard={product.title} />
                <CardProduct.BodyCard>
                  {product.description}
                </CardProduct.BodyCard>
                <CardProduct.FooterCard
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))
          }

        </div>
        <div className='md:w-2/6 py-3 w-full max-w-sm flex flex-col justify-center'>
          <h1 className='text-3xl font-bold text-black'>Cart Items</h1>
          { products.length > 0 && cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <Cart key={item.id}>
                <Cart.ImageCart image={product.image} />
                <Cart.BodyCart
                  nama={product.title}
                  price={`Rp ${product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}`}
                  qty={item.qty}
                  total={(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })} />
              </Cart>
            )
          })}
          <div ref={totalPriceRef}>
            <Cart>
              <Cart.TotalCart
                title="Total Belanjaan"
                totalAll={totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
              />
            </Cart>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductPage
