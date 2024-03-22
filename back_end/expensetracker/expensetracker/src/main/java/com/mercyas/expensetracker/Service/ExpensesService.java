package com.mercyas.expensetracker.Service;

import com.mercyas.expensetracker.DAOInterface.ExpenseDAO;
import com.mercyas.expensetracker.model.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
