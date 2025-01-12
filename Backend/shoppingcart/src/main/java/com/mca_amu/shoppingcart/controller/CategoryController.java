package com.mca_amu.shoppingcart.controller;

import com.mca_amu.shoppingcart.entity.Category;

import com.mca_amu.shoppingcart.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/save")
    public ResponseEntity<String> saveCategoryObj(@RequestBody Category category){
        Optional<Category> categoryObj = categoryService.findCategoryById(category.getCategoryId());
        if (categoryObj.isPresent())
        {
            Category categoryResponse =  categoryService.saveCategory(category);
            return ResponseEntity.ok(categoryResponse.getCategoryName()+" Saved successfully");
        }
        else{

            return ResponseEntity.ok("Category not found with the given ID:"+category.getCategoryId());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateCategoryObj(@RequestBody Category category)
    {
        Category categoryResponse = categoryService.saveCategory(category);
        return  ResponseEntity.ok(categoryResponse.getCategoryName()+" saved successfully");
    }

    @GetMapping("/fetchAllCategory")
    public List<Category> fetchAllCategoryObj()
    {
        return categoryService.fetchAllCategory();
    }

    @GetMapping("/fetchByCategoryById")
    public Optional<Category> fetchCategoryByIdObj(Long categoryId)
    {
        return categoryService.findCategoryById(categoryId);
    }

    @DeleteMapping("/delete/{categoryId}")
    public ResponseEntity<String> deleteCategoryObj(@PathVariable Long categoryId)
    {
        categoryService.deleteCategory(categoryId);
        return ResponseEntity.ok(categoryId+ " No. category deleted successfully");
    }
}
