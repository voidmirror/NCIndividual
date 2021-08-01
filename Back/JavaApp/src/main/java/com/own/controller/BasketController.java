package com.own.controller;

import com.own.additional.BasketPosition;
import com.own.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/v1/basket")
@CrossOrigin(origins = "http://localhost:4200")
public class BasketController {

    @Autowired
    private BasketService basketService;

    @PostMapping(value = "/calculate", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public double calculateBasketPrice(@RequestBody BasketPosition basketPosition) {
        System.out.println("INSIDE BASKET CONTROLLER");
        System.out.println(basketPosition);
        return basketService.calculatePrice(basketPosition);
    }

}
