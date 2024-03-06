package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Saving;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingDAO extends JpaRepository<Saving, Long> {
}
