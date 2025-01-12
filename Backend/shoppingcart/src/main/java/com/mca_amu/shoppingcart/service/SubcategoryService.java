package com.mca_amu.shoppingcart.service;

import com.mca_amu.shoppingcart.entity.Subcategory;
import com.mca_amu.shoppingcart.repository.SubcategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubcategoryService {

    @Autowired
    SubcategoryRepo subcategoryRepo;

    public Subcategory saveSubcategory(Subcategory subcategory)
    {
        return subcategoryRepo.save(subcategory);
    }

    public List<Subcategory> fetchAllSubcategory(){
        return subcategoryRepo.findAll();
    }

    public  Optional<Subcategory> findSubcategoryById(Long subcategoryId){
        return subcategoryRepo.findById(subcategoryId);
    }

    public void deleteCategory(Long subcategoryId){
        subcategoryRepo.deleteById(subcategoryId);
    }
}
