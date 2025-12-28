package com.atm.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atm.entity.Account;
import com.atm.entity.Transaction;
import com.atm.exception.ATMException;
import com.atm.repository.AccountRepository;
import com.atm.repository.TransactionRepository;

@Service
@Transactional
public class ATMService {

    private final AccountRepository accountRepo;
    private final TransactionRepository transactionRepo;

    public ATMService(AccountRepository accountRepo,
            TransactionRepository transactionRepo) {
        this.accountRepo = accountRepo;
        this.transactionRepo = transactionRepo;
    }

    // ================= LOGIN =================
    public Account login(String accNo, int pin) {

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        if (acc.getPin() != pin) {
            throw new ATMException("Invalid account number or PIN");
        }

        return acc;
    }

    // ================= BALANCE =================
    public double balance(String accNo) {

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        return acc.getBalance();
    }

    // ================= DEPOSIT =================
    public void deposit(String accNo, double amount) {

        if (amount <= 0) {
            throw new ATMException("Deposit amount must be greater than zero");
        }

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        acc.setBalance(acc.getBalance() + amount);
        accountRepo.save(acc);

        transactionRepo.save(
                new Transaction(accNo, "DEPOSIT", amount)
        );
    }

    // ================= WITHDRAW =================
    public void withdraw(String accNo, double amount) {

        if (amount <= 0) {
            throw new ATMException("Withdraw amount must be greater than zero");
        }

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        if (acc.getBalance() < amount) {
            throw new ATMException("Insufficient balance");
        }

        acc.setBalance(acc.getBalance() - amount);
        accountRepo.save(acc);

        transactionRepo.save(
                new Transaction(accNo, "WITHDRAW", amount)
        );
    }

    // ================= CHANGE PIN =================
    public void changePin(String accNo, int oldPin, int newPin) {

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        if (acc.getPin() != oldPin) {
            throw new ATMException("Old PIN is incorrect");
        }

        if (newPin < 1000 || newPin > 9999) {
            throw new ATMException("PIN must be exactly 4 digits");
        }

        acc.setPin(newPin);
        accountRepo.save(acc);
    }

    // ================= MINI STATEMENT =================
    public List<Transaction> getTransactions(String accNo) {

        Account acc = accountRepo.findByAccountNumber(accNo);

        if (acc == null) {
            throw new ATMException("Account not found");
        }

        return transactionRepo.findByAccountNumber(accNo);
    }
}
