package com.mca_amu.shoppingcart.entity;

import jakarta.persistence.*;

@Entity
public class Subcategory
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long subcategoryId;

    @Column
    private String subcategoryName;

    @Column
    private String subcategoryDesc;

    @Column
    private long categoryId;

    @Column
    private String createdDate;

    @Column
    private String updatedDate;

    public long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public String getSubcategoryDesc() {
        return subcategoryDesc;
    }

    public void setSubcategoryDesc(String subcategoryDesc) {
        this.subcategoryDesc = subcategoryDesc;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }
}
