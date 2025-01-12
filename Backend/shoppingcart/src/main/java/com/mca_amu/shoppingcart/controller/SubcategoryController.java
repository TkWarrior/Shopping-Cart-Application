package com.mca_amu.shoppingcart.controller;

import com.mca_amu.shoppingcart.entity.Product;
import com.mca_amu.shoppingcart.entity.Subcategory;
import com.mca_amu.shoppingcart.service.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subcategories")
public class SubcategoryController
{
    @Autowired
    SubcategoryService subcategoryService;

    @PostMapping("/save")
    public ResponseEntity<String> saveSubCategoryObj(@RequestBody Subcategory subcategory){
        Optional<Subcategory> subCategoryObj = SubcategoryService.findSubcategoryById(subcategory.getSubcategoryId());
        if (subCategoryObj.isPresent())
        {
            Subcategory subCategoryResponse =  subcategoryService.saveSubcategory(subcategory);
            return ResponseEntity.ok(subCategoryResponse.getSubcategoryName()+" Saved successfully");
        }
        else{

            return ResponseEntity.ok("Product not found with the given ID:"+subcategory.getSubcategoryId());
        }


    }
    @PutMapping("/update")
    public ResponseEntity<String> updateSubcategoryObj(@RequestBody Subcategory subcategory){
        Subcategory subcategoryResponse = subcategoryService.saveSubcategory(subcategory);
        return ResponseEntity.ok(subcategoryResponse.getSubcategoryName()+" Saved Successfully");
    }

    @GetMapping("/fetchAll")
    public List<Subcategory> fetchSubcategories(){
        return subcategoryService.fetchAllSubcategory();
    }

    @GetMapping("/fetchById")
    public Optional<Subcategory> fetchSubcategoriesById(Long subcategoryId){
        return subcategoryService.findSubcategoryById(subcategoryId);
    }

    @DeleteMapping("/delete/{subcategoryId}")
    public ResponseEntity<String> DeleteSubcategory(@PathVariable Long subcategoryId){
        subcategoryService.deleteCategory(subcategoryId);
        return ResponseEntity.ok(subcategoryId+" No Deleted ");
    }
}
