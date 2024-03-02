package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserDAO extends JpaRepository<User, Long>{
    // column name is variable name
    // table name is Entity name
    // this is jpql query style
    @Query("SELECT e FROM EXPENSES e WHERE e.userId = :id")
    List<Expense> findExpensesByUserId(@Param("id") Long id);
}
