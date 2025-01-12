package com.mca_amu.shoppingcart.service;

import com.mca_amu.shoppingcart.entity.Product;
import com.mca_amu.shoppingcart.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public Product saveProduct(Product product){
        return productRepo.save(product);
    }

    public Optional<Product> findProductById(Long productId){

        return productRepo.findById(productId);
    }

    public List<Product> fetchAllProducts() {
        return productRepo.findAll();
    }

    public void deleteProduct(Long productId){

        productRepo.deleteById(productId);

    }


}
