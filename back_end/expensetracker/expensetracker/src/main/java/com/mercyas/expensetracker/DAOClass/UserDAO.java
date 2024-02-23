package com.mercyas.expensetracker.DAOClass;

import com.mercyas.expensetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Long> {
}
