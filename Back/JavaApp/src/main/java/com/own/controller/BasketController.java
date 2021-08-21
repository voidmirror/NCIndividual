package com.own.controller;

import com.own.additional.BasketCountObject;
import com.own.additional.BasketPosition;
import com.own.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/rest/v1/basket")
@CrossOrigin(origins = "http://localhost:4200")
public class BasketController {

    @Autowired
    private BasketService basketService;

    @PostMapping(value = "/calculate", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public double calculateBasketPrice(@RequestBody BasketPosition basketPosition) {
        System.out.println("INSIDE BASKET CONTROLLER");
//        System.out.println(basketPosition);
        return basketService.calculatePrice(basketPosition);
    }

    @PostMapping(value = "/calculate/all", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Double> calculateBasketPrice(@RequestBody BasketCountObject basketCountObject) {
        System.out.println("INSIDE BASKET ALL PRICES CONTROLLER");
        System.out.println(Arrays.toString(basketCountObject.getBasketPositions()));
        return new ResponseEntity<>(basketService.calculateAllBasket(basketCountObject.getBasketPositions(), basketCountObject.getUsername()), HttpStatus.OK);
    }

}
