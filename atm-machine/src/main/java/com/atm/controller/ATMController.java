package com.atm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.atm.dto.AccountDTO;
import com.atm.entity.Account;
import com.atm.entity.Transaction;
import com.atm.response.ApiResponse;
import com.atm.service.ATMService;

@RestController
@RequestMapping("/atm")
@CrossOrigin(origins = "http://localhost:3000")
public class ATMController {

    private final ATMService service;

    public ATMController(ATMService service) {
        this.service = service;
    }

    // ✅ CHANGE PIN
    @PostMapping("/change-pin")
    public ApiResponse<String> changePin(
            @RequestParam String accNo,
            @RequestParam int oldPin,
            @RequestParam int newPin) {

        service.changePin(accNo, oldPin, newPin);
        return new ApiResponse<>(true, "PIN changed successfully", null);
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ApiResponse<AccountDTO> login(
            @RequestParam String accNo,
            @RequestParam int pin) {

        Account acc = service.login(accNo, pin);
        AccountDTO dto
                = new AccountDTO(acc.getAccountNumber(), acc.getBalance());

        return new ApiResponse<>(true, "Login successful", dto);
    }

    // ✅ BALANCE
    @GetMapping("/balance/{accNo}")
    public ApiResponse<Double> balance(@PathVariable String accNo) {
        return new ApiResponse<>(true, "Balance fetched",
                service.balance(accNo));
    }

    // ✅ DEPOSIT
    @PostMapping("/deposit")
    public ApiResponse<String> deposit(
            @RequestParam String accNo,
            @RequestParam double amount) {

        service.deposit(accNo, amount);
        return new ApiResponse<>(true, "Deposit successful", null);
    }

    // ✅ WITHDRAW
    @PostMapping("/withdraw")
    public ApiResponse<String> withdraw(
            @RequestParam String accNo,
            @RequestParam double amount) {

        service.withdraw(accNo, amount);
        return new ApiResponse<>(true, "Withdraw successful", null);
    }

    // ✅ TRANSACTIONS
    @GetMapping("/transactions/{accNo}")
    public ApiResponse<List<Transaction>> transactions(
            @PathVariable String accNo) {

        return new ApiResponse<>(
                true,
                "Transaction history fetched",
                service.getTransactions(accNo));
    }
}
