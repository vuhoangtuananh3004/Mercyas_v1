package com.mercyas.expensetracker.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "SAVINGS")
@Table(name = "SAVINGS")
public class Saving {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SAVINGID")
    private Long savingId;
    @Column(name = "USERID")
    private Long userId;


    @Column(name = "VALUE")
    private BigDecimal value;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "DATE")
    private Date date;

    public Long getSavingId() {
        return savingId;
    }

    public void setSavingId(Long savingId) {
        this.savingId = savingId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Saving{" +
                "savingId=" + savingId +
                ", userId=" + userId +
                ", value=" + value +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}
