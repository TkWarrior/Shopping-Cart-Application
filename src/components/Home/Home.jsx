import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import { FaCartPlus } from "react-icons/fa";
import cartContext from "../../context/Cartprovider";
import searchContext from "../../context/Searchprovider";
import { useNavigate } from "react-router";


export default function Home() {
  const [data, setData] = useState([]);
  const { addtoCart } = useContext(cartContext);
  const {searchTerm} = useContext(searchContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCategories().then((data) => {
      console.log(data)
      setData(data);
    });
  }, []);
console.log(searchTerm);
console.log("Current Products:", data);

const filteredProducts = data.filter((product)=>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  console.log("Filtered products",filteredProducts)
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />

            {/* Product Details */}
            <div className="p-4 text-center">
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {product.title}
              </p>

              {/* Buttons Section */}
              <div className="flex justify-center gap-3 mt-4 h-15">
                <button
                  onClick={() => addtoCart(product)}
                  className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                  <FaCartPlus className="mr-2" /> Add to Cart
                </button>

                <button onClick={() => navigate('/checkout',{ state : { product }})} className=" text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                  Buy Now
                </button>

                <button className=" text-black px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
