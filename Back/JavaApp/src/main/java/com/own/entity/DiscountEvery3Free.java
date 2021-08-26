package com.own.entity;

import org.springframework.stereotype.Component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Component
@Entity
@DiscriminatorValue("3")
public class DiscountEvery3Free extends Discount {
    public DiscountEvery3Free() {
        super("discountEvery3Free");
    }

    @Override
    public double applyDiscount(Double price, Integer num) {
//        System.out.println("---INSIDE EVERY 3 FREE---");
//        System.out.println(Math.floorDiv(num, 3));
        double individualPrice = price / num;
//        System.out.println(individualPrice);
//        System.out.println(Math.floorDiv(num, 3) > 0);
//        System.out.println(price - (individualPrice * (Math.floorDiv(num, 3))));
//        System.out.println(price);
//        System.out.println("---INSIDE EVERY 3 FREE---");
        return Math.floorDiv(num, 3) > 0 ? price - (individualPrice * (Math.floorDiv(num, 3))) : price;
    }
}
