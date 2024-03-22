package com.mercyas.expensetracker.Service;

import com.mercyas.expensetracker.DAOInterface.ReceiptDAO;
import com.mercyas.expensetracker.model.Receipt;
import com.mercyas.expensetracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ReceiptService {
    @Autowired
    private ReceiptDAO receiptDAO;

    public List<Receipt> findAllReceipt(){
        List<Receipt> users = receiptDAO.findAll();
        return users != null ? users : Collections.emptyList();
    }

    public Receipt getReceiptById (Long receipt) {
        //TODO: verify if this is Long variable
        return receiptDAO.findById(receipt).orElse(null);
    }



}
