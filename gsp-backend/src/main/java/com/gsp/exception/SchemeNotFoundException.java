package com.gsp.exception;

public class SchemeNotFoundException extends RuntimeException {

    public SchemeNotFoundException(String message) {
        super(message); // Call the superclass (RuntimeException) constructor with the message
    }

    public SchemeNotFoundException(String message, Throwable cause) {
        super(message, cause); // Call the superclass (RuntimeException) constructor with message and cause
    }
}
