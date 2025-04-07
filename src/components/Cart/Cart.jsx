import React, { useContext } from 'react'
import cartContext from '../../context/Cartprovider'

// function Cart() {
//     const {cartItem} = useContext(cartContext)
//   return (
//     <div>
//         <h1>Added Items to the Cart</h1>
//       <div className="grid grid-cols-1 justify-end md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
//         {cartItem.length > 0 ? (
//           cartItem.map((item, index) => (
//             <div
//               key={item.id || index}
//               className='className="border rounded-lg p-2 text-center sm:w-3/4 pl-5 '
//             >
//               <img src={item.image} alt={item.title} />
//               <h2>{item.title}</h2>
//               <h2>Count : {item.count}</h2>
//             </div>
//           ))
//         ) : (
//           <h1>Cart is Empty</h1>
//         )}
//       </div>
//     </div>
//   );
  
// }

// export default Cart;

function Cart() {
  const { cartItem } = useContext(cartContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shopping Cart
      </h1>

      {/* Check if Cart is Empty */}
      {cartItem.length > 0 ? (
        <div className="flex justify-center">
          <table className="table-auto w-3/4 border-collapse border border-gray-500">
            <thead>
              <tr>
                <th className="p-3 text-left border w-1/4 text-center">
                  Product Name
                </th>
                <th className="p-3 text-left border w-1/4 text-center">
                  Product Image
                </th>
                <th className="p-3 text-left border w-1/4 text-center">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="border">
              {cartItem.map((item) => (
                <tr key={item.id} className="border border-gray-500 ">
                  <td>{item.title}</td>
                  <td className="">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-full h-56 object-cover"
                    />
                  </td>
                  <td className="text-center">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {cartItem.map((item, index) => (
            <div
              key={item.id || index}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
            > */}
          {/* Product Image */}
          {/* <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              /> */}

          {/* Product Details */}
          {/* <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.title}
                </h2>
                <h3 className="text-md text-gray-600 mt-2">
                  Quantity: <span className="font-bold">{item.count}</span>
                </h3>
              </div>
            </div> */}
          {/* ))} */}
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-gray-700">
            🛒 Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-2">
            Browse our products and add some to your cart!
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
