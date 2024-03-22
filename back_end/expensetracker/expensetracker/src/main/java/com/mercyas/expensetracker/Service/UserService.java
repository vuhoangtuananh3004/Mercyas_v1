package com.mercyas.expensetracker.Service;

import com.mercyas.expensetracker.DAOInterface.UserDAO;
import com.mercyas.expensetracker.model.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;
    @PersistenceContext
    private EntityManager entityManager;

    public List<User> findAll() {
        List<User> users = userDAO.findAll();
        return users != null ? users : Collections.emptyList();
    }

    public User getUserById(Long userId) {
        return userDAO.findById(userId).orElse(null);
    }

    @Transactional
    public User saveUser(User user) {
        return userDAO.save(user);
    }

    public void deleteUser(Long id) {
        userDAO.deleteById(id);
    }

    public List<Expense> getAllExpenseByUserId(@NotNull Long id) {
        return userDAO.findExpensesByUserId(id);
    }

    public List<NetIncome> getAllNetIncomesByUserId(@NotNull Long id) {
        return userDAO.findNetIncomesByUserId(id);
    }

    public List<Saving> getAllSavingsByUserId(@NotNull Long id) {
        return userDAO.findSavingsByUserId(id);
    }

    public List<Receipt> findReceiptsByuUerId(Long userId) {
        //TODO: verify if Id is Long or a String
        if (userId instanceof Long) {
            TypedQuery<Receipt> query = entityManager.createQuery("SELECT r FROM RECEIPT r WHERE r.userId = :id", Receipt.class);
            query.setParameter("id", userId);
            List<Receipt> receipts = query.getResultList();
            return receipts != null ? receipts : Collections.emptyList();
        } else {
            return Collections.emptyList();
        }
    }

}
