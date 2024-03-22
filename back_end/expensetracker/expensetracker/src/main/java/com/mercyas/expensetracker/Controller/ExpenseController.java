package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.Service.ExpensesService;
import com.mercyas.expensetracker.model.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
    @Autowired
    private ExpensesService expensesService;

    @GetMapping("/{expenseID}")
    public Expense getExpense(@PathVariable Long expenseID){return expensesService.getExpenseByID(expenseID);}

    @PostMapping
    public void saveExpense(@RequestBody Expense expense){expensesService.saveExpense(expense);}
}
