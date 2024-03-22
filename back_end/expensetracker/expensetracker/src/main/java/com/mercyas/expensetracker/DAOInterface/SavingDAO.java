package com.mercyas.expensetracker.DAOInterface;

import com.mercyas.expensetracker.model.Saving;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingDAO extends JpaRepository<Saving, Long> {
}
