package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExpensesService {
    @Autowired
    private ExpenseDAO expenseDAO;


    public List<Expense> getAllExpenses(){return expenseDAO.findAll();}
    public Expense getExpenseByID(Long id){return expenseDAO.findById(id).orElse(null);}
    public void saveExpense(Expense expense){expenseDAO.save(expense);}
    public void deleteExpense(Long id){expenseDAO.deleteById(id);}

}
