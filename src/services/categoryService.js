import axios from 'axios';
export const getCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json();
  return data;
}