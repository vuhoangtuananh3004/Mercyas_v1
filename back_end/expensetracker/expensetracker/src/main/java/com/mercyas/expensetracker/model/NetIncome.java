package com.mercyas.expensetracker.model;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;

import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "NETINCOMES")
@Table(name = "NETINCOMES")
@Transactional
public class NetIncome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NETINCOMEID")
    private Long netIncomeId;
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
    public NetIncome(){}

    public Long getNetIncomeId() {
        return netIncomeId;
    }

    public void setNetIncomeId(Long netIncomeId) {
        this.netIncomeId = netIncomeId;
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
        return "NetIncome{" +
                "netIncomeId=" + netIncomeId +
                ", userId=" + userId +
                ", value=" + value +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}
