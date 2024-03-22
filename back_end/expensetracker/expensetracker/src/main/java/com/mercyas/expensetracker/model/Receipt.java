package com.mercyas.expensetracker.model;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity(name = "RECEIPT")
@Table(name = "RECEIPT")
@Transactional
public class Receipt implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RECEIPTID")
    private Long receiptID;

    @Column(name = "USERID")
    private Long userID;
    @Column(name = "TOTAL")
    private BigDecimal total;
    @Column(name = "STOREID")
    private String storeId;
    @Column(name = "STOREDETAILID")
    private Long storeDetailId;
//    @ManyToOne
//    @JoinColumn(name = "USERID")
//    private User user;

    public Long getReceiptID() {
        return receiptID;
    }

    public void setReceiptID(Long receiptID) {
        this.receiptID = receiptID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public String getStoreId() {
        return storeId;
    }

    public void setStoreId(String storeId) {
        this.storeId = storeId;
    }

    public Long getStoreDetailId() {
        return storeDetailId;
    }

    public void setStoreDetailId(Long storeDetailId) {
        this.storeDetailId = storeDetailId;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }


    @Override
    public String toString() {
        return "Receipt{" +
                "receiptID=" + receiptID +
                ", userID=" + userID +
                ", total=" + total +
                ", storeId='" + storeId + '\'' +
                ", storeDetailId=" + storeDetailId +
                '}';
    }
}
