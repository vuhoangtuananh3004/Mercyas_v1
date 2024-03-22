package com.mercyas.expensetracker.Service;


import com.mercyas.expensetracker.model.EmailDetails;

public interface EmailServicesInterface {
    String sendSimpleEmail (EmailDetails details);
    String sendMailWithAttachment(EmailDetails attachmentDetails);
}
