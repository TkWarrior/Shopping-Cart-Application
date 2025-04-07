
import React from 'react'
import { useLocation } from 'react-router'
// import {loadStripe} from "@stripe/stripe-js";
function Checkout() {
  const location = useLocation();

  const product= location.state.product;
  console.log(product);
  // const stripepromise = loadStripe("pk_test_51R52iGBQbIpIGEk7HBtFBEWsU7rlMXHOot18exMKhNlyIS9Sm0BblyReastgX7DFsB2axd3FldcKKGggMg9F0H7400rm1BdehN");

  // const handleCheckout = async () => {
  //     const stripe = await stripepromise;

  //     stripe.redirectToCheckout({
  //       lineItems: [
  //         {
  //           price: "price_1R5MclBQbIpIGEk7tKLcSmKT",
  //           quantity:1
  //         },
  //       ],
  //       mode:"payment",
  //       successUrl:"http://localhost:3000/success",
  //       cancelUrl:"http://localhost:3000/cancel"
  //     });
  // };

  // const handlePayment = () => {
  //   const option = {
  //      key:
  //   }
  // }
  return (
    <div>
      <h2>Product Checkout</h2>
      {product ? (
        <div className=" justify-center border-red-800 ml-10 mt-10 items-center size-1/4">
          <h2 className="text-center text-lg text-pretty">
            Buying product : {product.title}{" "}
          </h2>
          <img
            className="m-10 size-72"
            src={product.image}
            alt={product.image}
          />
          <div className='items-center justify-center'>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}$</p>
            <button  className='bg-blue-400 rounded-lg h-10 align-middle w-20 mt-5'>Pay Now </button>
          </div>
        </div>
      ) : (
        <h2>No product</h2>
      )}
    </div>
  );
}


export default Checkout