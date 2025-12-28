package com.atm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atm.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByAccountNumber(String accountNumber);
}
