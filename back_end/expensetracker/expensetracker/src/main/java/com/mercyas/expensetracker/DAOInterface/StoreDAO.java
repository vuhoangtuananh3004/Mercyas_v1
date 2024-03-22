package com.mercyas.expensetracker.DAOInterface;

import com.mercyas.expensetracker.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreDAO extends JpaRepository<Store, Long> {
}
