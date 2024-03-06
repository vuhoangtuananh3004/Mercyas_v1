package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.SavingSerive;
import com.mercyas.expensetracker.model.Saving;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/savings")
public class SavingController {
    @Autowired
    private SavingSerive savingSerive;

    @GetMapping("/{savingId}")
    public Saving getSaving(@PathVariable Long savingId){
        return Optional.of(savingSerive.getSavingById(savingId)).orElse(null);
    }

    @PostMapping
    public void saveSaving(@RequestBody Saving saving){savingSerive.saveSaving(saving);}
}
