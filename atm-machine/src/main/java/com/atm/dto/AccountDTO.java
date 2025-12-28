package com.atm.dto;

public class AccountDTO {

    private final String accountNumber;
    private final double balance;

    public AccountDTO(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }
}
