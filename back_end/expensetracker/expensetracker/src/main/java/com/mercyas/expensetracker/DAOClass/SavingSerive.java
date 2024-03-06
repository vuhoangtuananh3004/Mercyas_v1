package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.Saving;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SavingSerive {
    @Autowired
    private SavingDAO savingDAO;

    public List<Saving> getAllSavings(){return savingDAO.findAll();}

    public Saving getSavingById(Long savingId){return savingDAO.findById(savingId).orElse(null);}

    public Saving saveSaving(Saving saving){return savingDAO.save(saving);}

    public void deleteSaving(Long id){savingDAO.deleteById(id);}
}
