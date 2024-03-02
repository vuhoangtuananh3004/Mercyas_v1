package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NetIncomeDAO extends JpaRepository<NetIncome, Long> {
}
