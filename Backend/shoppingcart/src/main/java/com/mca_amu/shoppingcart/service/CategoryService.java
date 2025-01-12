package com.mca_amu.shoppingcart.service;

import com.mca_amu.shoppingcart.entity.Category;
import com.mca_amu.shoppingcart.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public Category saveCategory(Category category)
    {
        return categoryRepo.save(category);
    }

    public List<Category> fetchAllCategory() {
        return categoryRepo.findAll();
    }

    public Optional<Category> findCategoryById(Long categoryId){
        return categoryRepo.findById(categoryId);
    }

    public void deleteCategory(Long categoryId) {
        categoryRepo.deleteById(categoryId);
    }
}
