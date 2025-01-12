package com.mca_amu.shoppingcart.repository;

import com.mca_amu.shoppingcart.entity.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubcategoryRepo extends JpaRepository<Subcategory,Long> {
}
