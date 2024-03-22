package com.mercyas.expensetracker.Service;

import com.mercyas.expensetracker.DAOInterface.ReceiptDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReceiptService {
    @Autowired
    private ReceiptDAO receiptDAO;


}
