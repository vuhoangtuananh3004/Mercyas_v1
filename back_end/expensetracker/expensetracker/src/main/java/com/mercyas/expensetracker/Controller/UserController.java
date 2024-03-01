package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.UserService;
import com.mercyas.expensetracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/userDetail")
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


}
