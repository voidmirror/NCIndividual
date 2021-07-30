package com.own.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/v1/basket")
@CrossOrigin(origins = "http://localhost:4200")
public class BasketController {

    @PostMapping("/calculate")
    public void calculateBasketPrice() {

    }

}
