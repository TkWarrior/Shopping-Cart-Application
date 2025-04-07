import { createContext, useState } from "react";

const cartContext = createContext();

export function Cartprovider({ children }){
    console.log("cart provider is rendring")
    const [cartItem,setCartitem] = useState([]);

    const addtoCart = (product) => {
        console.log(product)
        console.log(cartItem)
        setCartitem((prevCart) => {
            // to check if the product already exist or not
              const existingItem = prevCart.find((item) => item.id === product.id);
              if(existingItem){
                // this will actually update that particular cart item which exist in the cart hum yha par do baar item.id === product.id ka check isliye lga rahe hai taki accidently dusre cart item bhi update na ho jaye
                 const update = prevCart.map((item) => item.id ===  product.id ? {...item, count:item.count + 1  }:item)
                 return update
              }
              else{
                 return [...prevCart,{...product,count:1}];
              }
        }
        );
    }
    return (
      <cartContext.Provider value={{ cartItem, addtoCart }}>
        {children}
      </cartContext.Provider>
    );
    
}

export default cartContext;