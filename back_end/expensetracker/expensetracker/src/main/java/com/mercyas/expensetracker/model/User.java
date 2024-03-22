package com.mercyas.expensetracker.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity(name = "USERS")
@Table(name = "USERS")
//@Transactional
public class User  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USERID")
    private Long userId;
    @Column(name = "FIRST_NAME")
    private String fName;
    @Column(name = "LAST_NAME")
    private String lName;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "AGREEMENT")
    private boolean agreement;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "USERID", referencedColumnName = "USERID")
    private Set<Expense> expenses;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "USERID", referencedColumnName = "USERID")
    private Set<NetIncome> netIncomes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "USERID", referencedColumnName = "USERID")
    private Set<Saving> savings;

    @OneToMany
    @JoinColumn(name = "USERID", referencedColumnName = "USERID")
    private List<Receipt> receipts;
    public User() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isAgreement() {
        return agreement;
    }

    public void setAgreement(boolean agreement) {
        //TODO: Back end is always true false. Thus, front end must have a way to specify true false
        this.agreement = agreement;
    }

    public Set<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(Set<Expense> expenses) {
        this.expenses = expenses;
    }

    public Set<NetIncome> getNetIncomes() {
        return netIncomes;
    }

    public void setNetIncomes(Set<NetIncome> netIncomes) {
        this.netIncomes = netIncomes;
    }

    public Set<Saving> getSavings() {
        return savings;
    }

    public void setSavings(Set<Saving> savings) {
        this.savings = savings;
    }

    public List<Receipt> getReceipts() {
        return receipts;
    }

    public void setReceipts(List<Receipt> receipts) {
        this.receipts = receipts;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", email='" + email + '\'' +
                ", agreement=" + agreement +
                '}';
    }
}
