package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.EmailServices;
import com.mercyas.expensetracker.DAOClass.UserService;
import com.mercyas.expensetracker.model.EmailDetails;
import com.mercyas.expensetracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class EmailController {
    @Autowired private EmailServices emailService;

    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails details)
    {
        System.out.println(details);
        String status
                = emailService.sendSimpleEmail(details);

        return status;

    }


}
