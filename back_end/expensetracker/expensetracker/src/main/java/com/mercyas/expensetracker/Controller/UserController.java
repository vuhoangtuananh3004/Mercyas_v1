package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.UserService;
import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public String getUser(){
        String status = "success";
        return status;
    }
//    public User getUser(@PathVariable Long userId){
//        return Optional.of(userService.getUserById(userId)).orElse(null);
//    }

    @PostMapping
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

<<<<<<< HEAD
    @GetMapping("/{userId}/expenses")
    public List<Expense> getAllExpensesByUserId(@PathVariable Long userId){return Optional.of(userService.getAllExpenseByUserId(userId)).orElse(null);}
=======

>>>>>>> f64552268e96e644f54774a6f55b926dd6d27849
}
