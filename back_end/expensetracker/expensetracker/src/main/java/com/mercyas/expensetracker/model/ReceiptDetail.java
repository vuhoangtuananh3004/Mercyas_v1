package com.mercyas.expensetracker.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "RECEIPT_DETAIL")
@Table(name = "RECEIPT_DETAIL")
public class ReceiptDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RECEIPT_DETAIL_ID")
    private Long receiptDetailId;

    @Column(name = "RECEIPT_ID")
    private Long receiptId;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "PRICE")
    private BigDecimal price;

    @Column(name = "DATE")
    private Date date;

    public Long getReceiptDetailId() {
        return receiptDetailId;
    }

    public void setReceiptDetailId(Long receiptDetailId) {
        this.receiptDetailId = receiptDetailId;
    }

    public Long getReceiptId() {
        return receiptId;
    }

    public void setReceiptId(Long receiptId) {
        this.receiptId = receiptId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "ReceiptDetail{" +
                "receiptDetailId=" + receiptDetailId +
                ", receiptId=" + receiptId +
                ", itemName='" + itemName + '\'' +
                ", price=" + price +
                ", date=" + date +
                '}';
    }
}
