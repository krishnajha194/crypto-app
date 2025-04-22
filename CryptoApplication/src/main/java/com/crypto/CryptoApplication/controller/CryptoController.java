package com.crypto.CryptoApplication.controller;

import com.crypto.CryptoApplication.model.CryptoRequest;
import com.crypto.CryptoApplication.model.CryptoResponse;
import com.crypto.CryptoApplication.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CryptoController {

    @Autowired
    private CryptoService cryptoService;

    @PostMapping("/encrypt")
    public CryptoResponse encrypt(@RequestBody CryptoRequest request) throws Exception {
        String cipherText = cryptoService.encrypt(request.getText(), request.getUsername());
        return new CryptoResponse(cipherText);
    }

    @PostMapping("/decrypt")
    public CryptoResponse decrypt(@RequestBody CryptoRequest request) throws Exception {
        String plainText = cryptoService.decrypt(request.getText(), request.getUsername());
        return new CryptoResponse(plainText);
    }
}

