package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.NetIncomesService;
import com.mercyas.expensetracker.DAOClass.SavingSerive;
import com.mercyas.expensetracker.model.NetIncome;
import com.mercyas.expensetracker.model.Saving;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/netincomes")
public class NetIncomeController {
    @Autowired
    private NetIncomesService netIncomesService;

    @GetMapping("/{savingId}")
    public NetIncome getNetIncome(@PathVariable Long netIncomeId){
        return Optional.of(netIncomesService.getNetIncomeByID(netIncomeId)).orElse(null);
    }

    @PostMapping
    public void saveNetIncome(@RequestBody NetIncome netIncome){netIncomesService.saveNetIncome(netIncome);}
}
