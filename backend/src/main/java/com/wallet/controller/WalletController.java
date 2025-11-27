package com.wallet.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    private double balance = 100; // initial balance

    @GetMapping("/balance")
    public Map<String, Double> getBalance() {
        return Map.of("balance", balance);
    }

    @PostMapping("/add")
    public Map<String, Double> addFunds(@RequestBody Map<String, Double> payload) {
        balance += payload.get("amount");
        return Map.of("balance", balance);
    }
}
