package com.atm.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class Account {

    @Id
    private String accountNumber;

    private int pin;
    private double balance;

    @Column(name = "daily_withdrawn", nullable = false)
    private Double dailyWithdrawn = 0.0;

    @Column(name = "last_withdraw_date")
    private LocalDate lastWithdrawDate;

    // getters & setters
    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public int getPin() {
        return pin;
    }

    public void setPin(int pin) {
        this.pin = pin;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public Double getDailyWithdrawn() {
        return dailyWithdrawn;
    }

    public void setDailyWithdrawn(Double dailyWithdrawn) {
        this.dailyWithdrawn = dailyWithdrawn;
    }

    public LocalDate getLastWithdrawDate() {
        return lastWithdrawDate;
    }

    public void setLastWithdrawDate(LocalDate lastWithdrawDate) {
        this.lastWithdrawDate = lastWithdrawDate;
    }
}
