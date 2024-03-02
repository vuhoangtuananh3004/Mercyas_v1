package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseDAO extends JpaRepository<Expense, Long> {
}
