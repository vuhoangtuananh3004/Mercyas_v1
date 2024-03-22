package com.mercyas.expensetracker.DAOInterface;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.Saving;
import com.mercyas.expensetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserDAO extends JpaRepository<User, Long> {
    @Query("SELECT e FROM EXPENSES e WHERE e.userId = :id")
    List<Expense> findExpensesByUserId(@Param("id") Long id);

    @Query("SELECT n FROM NETINCOMES n WHERE n.userId = :id")
    List<NetIncome> findNetIncomesByUserId(@Param("id") Long id);

    @Query("SELECT s FROM SAVINGS s WHERE s.userId = :id")
    List<Saving> findSavingsByUserId(@Param("id") Long id);

}
