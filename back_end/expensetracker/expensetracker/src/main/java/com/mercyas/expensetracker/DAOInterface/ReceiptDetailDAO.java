package com.mercyas.expensetracker.DAOInterface;

import com.mercyas.expensetracker.model.ReceiptDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptDetailDAO extends JpaRepository<ReceiptDetail, Long> {
}
