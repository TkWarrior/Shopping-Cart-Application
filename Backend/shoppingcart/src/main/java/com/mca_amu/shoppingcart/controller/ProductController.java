package com.mca_amu.shoppingcart.controller;

import com.mca_amu.shoppingcart.entity.Product;
import com.mca_amu.shoppingcart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<String> saveProductObj(@RequestBody Product product){
        Optional<Product> productObj = productService.findProductById(product.getProductId());
        if (productObj.isPresent())
        {
            Product productResponse =  productService.saveProduct(product);
            return ResponseEntity.ok(productResponse.getProductName()+" Saved successfully");
        }
        else{

            return ResponseEntity.ok("Product not found with the given ID:"+product.getProductId());
        }


    }

    @PutMapping("/update")
    public ResponseEntity<String> updateProductObj(@RequestBody Product product){

        Product productResponse =  productService.saveProduct(product);
        return ResponseEntity.ok(productResponse.getProductName()+" Updated successfully");
    }

    @GetMapping("/fetchAllProducts")
    public List<Product> fetchAllProductsObj(){
        return productService.fetchAllProducts();
    }



    @DeleteMapping("/delete/{productId}")
    public ResponseEntity <String> deleteProductObj(@PathVariable Long productId){
        productService.deleteProduct(productId);
        return ResponseEntity.ok(productId+" .No product deleted successfully");
    }


}
