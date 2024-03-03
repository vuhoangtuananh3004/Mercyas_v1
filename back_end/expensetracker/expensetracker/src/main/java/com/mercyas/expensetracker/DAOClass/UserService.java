package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService{
    @Autowired
    private UserDAO userDAO;

    public List<User> getAllUsers(){
        return userDAO.findAll();
    }

    public User getUserById(Long userId){
        return userDAO.findById(userId).orElse(null);
    }

    public User saveUser(User user){
        return userDAO.save(user);
    }

    public void deleteUser(Long id){
        userDAO.deleteById(id);
    }

    public List<Expense> getAllExpenseByUserId(@NotNull Long id){return userDAO.findExpensesByUserId(id);}


}
