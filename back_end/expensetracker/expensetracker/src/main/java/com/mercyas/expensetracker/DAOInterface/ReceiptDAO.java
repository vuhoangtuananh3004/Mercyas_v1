package com.mercyas.expensetracker.DAOInterface;

import com.mercyas.expensetracker.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


public interface ReceiptDAO extends JpaRepository<Receipt, Long> {
}
