package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NetIncomesService {
    @Autowired
    private NetIncomeDAO netIncomeDAO;

    @Autowired
    private UserDAO userDAO;
    public List<NetIncome> getAllNetIncomes(){return netIncomeDAO.findAll();}
    public NetIncome getNetIncomeByID(Long id){return netIncomeDAO.findById(id).orElse(null);}
    public void saveNetIncome(NetIncome netIncome){netIncomeDAO.save(netIncome);}
    public void deleteNetIncome(Long id){netIncomeDAO.deleteById(id);}

}
