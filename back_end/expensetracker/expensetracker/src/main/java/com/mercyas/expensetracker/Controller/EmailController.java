package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.Service.EmailServices;
import com.mercyas.expensetracker.model.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
