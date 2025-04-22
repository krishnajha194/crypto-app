package com.crypto.CryptoApplication.model;

public class CryptoResponse {
    private String text;

    public CryptoResponse(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}