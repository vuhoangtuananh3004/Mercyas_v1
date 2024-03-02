package com.mercyas.expensetracker.model;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;

import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "EXPENSES")
@Table(name = "EXPENSES")
//@Transactional
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "EXPENSEID")
    private Long expenseId;
    @Column(name = "USERID")
    private Long userId;


    @Column(name = "VALUE")
    private BigDecimal value;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "DATE")
    private Date date;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "USERID", referencedColumnName = "USERID")
//    private User user;
//    public Expense(){}

    public Long getExpenseId() {
        return expenseId;
    }

    public Long getUserId() {
        return userId;
    }

    public BigDecimal getValue() {
        return value;
    }


    public Date getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public void setExpenseId(Long expenseId) {
        this.expenseId = expenseId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public void setValue(BigDecimal value) {
        this.value = value;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public String toString() {
        return "Expense{" +
                "expenseId=" + expenseId +
                ", userId=" + userId +
                ", value=" + value +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}
