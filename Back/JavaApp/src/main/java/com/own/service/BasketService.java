package com.own.service;

import com.own.additional.BasketPosition;
import com.own.entity.Discount;
import com.own.entity.DiscountPersonal;
import com.own.repository.PositionRepository;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BasketService {

    @Autowired
    private PositionRepository positionRepository;

    @Autowired
    private UserRepository userRepository;

    private final ArrayList<Discount> globalDiscounts = new ArrayList<>();

    // Possibly add new features like sales or promo codes
    public double calculatePrice(BasketPosition basketPosition) {
        System.out.println(basketPosition.getNum() * basketPosition.getPos().getPrice());
        return basketPosition.getNum() * basketPosition.getPos().getPrice();
    }

    public double calculateAllBasket(BasketPosition[] basketPositions, String username) {

        double sum = 0;

        System.out.println();
        System.out.println();
        System.out.println("INIT CALCULATE ALL BASKET");
        System.out.println(Arrays.toString(basketPositions));
        System.out.println(username);

        for (BasketPosition b : basketPositions) {

            if (b.getPos().getDiscounts() != null) {
                System.out.println("INSIDE DISCOUNTS");
                if (!b.getPos().getDiscounts().isEmpty()) {
                    System.out.println("INSIDE DISCOUNTS NOT EMPTY");

                    ArrayList<Double> stackablePrice = new ArrayList<>();
                    ArrayList<Double> unstackablePrice = new ArrayList<>();
                    ArrayList<Discount> stackableDiscounts = new ArrayList<>();
                    ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

                    for (Discount d : b.getPos().getDiscounts()) {
                        if (d.isStackable()) {
                            stackableDiscounts.add(d);
                        } else {
                            unstackableDiscounts.add(d);
                        }
                    }
                    for (Discount d : stackableDiscounts) {
                        stackablePrice.add(d.applyDiscount(b.getPos().getPrice(), b.getNum()));
                    }

                    System.out.println(stackablePrice);
                    System.out.println(unstackableDiscounts);

                    double currentSum = 0;
                    if (!stackablePrice.isEmpty()) {
                        currentSum = Collections.min(stackablePrice);
                    }

                    System.out.println("Current Sum after stackble: " + currentSum);

                    for (Discount d : unstackableDiscounts) {
                        currentSum = d.applyDiscount(currentSum, b.getNum());
                    }

                    System.out.println("Current Sum after unstackble: " + currentSum);

                    sum += currentSum;

                } else {
                    System.out.println("NO DISCOUNTS");
                    sum += b.getPos().getPrice() * b.getNum();
                }
            }

            System.out.println("Sum before global: " + sum);

            // personal discount from repository
            Set<Discount> personalDiscounts = userRepository.findByUsername(username).get().getDiscounts();;

            int countWare = 0;

            ArrayList<Double> stackablePrice = new ArrayList<>();
            ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

            for (BasketPosition basketPosition : basketPositions) {
                countWare += basketPosition.getNum();
            }
            System.out.println("Count Ware: " + countWare);

            if (personalDiscounts != null && !personalDiscounts.isEmpty()) {
                for (Discount d : personalDiscounts) {
                    if (d.isStackable()) {
                        stackablePrice.add(d.applyDiscount(sum, countWare));
                    } else {
                        unstackableDiscounts.add(d);
                    }

                }
                if (!stackablePrice.isEmpty()) {
                    sum = Collections.min(stackablePrice);
                }
                for (Discount d : unstackableDiscounts) {
                    sum = d.applyDiscount(sum, countWare);
                }
            }

            System.out.println("Sum after global: " + sum);

            stackablePrice.clear();
            unstackableDiscounts.clear();
            System.out.println("AFTER CLEAR " + stackablePrice);
            System.out.println("AFTER CLEAR " + unstackableDiscounts);

            if (globalDiscounts != null && !globalDiscounts.isEmpty()) {

                for (Discount d : globalDiscounts) {
                    System.out.println(d.getName());
                    if (d.isStackable()) {
                        stackablePrice.add(d.applyDiscount(sum, countWare));
                    } else {
                        unstackableDiscounts.add(d);
                    }

                }
                if (!stackablePrice.isEmpty()) {
                    sum = Collections.min(stackablePrice);
                }

                if (!unstackableDiscounts.isEmpty()) {
                    for (Discount d : unstackableDiscounts) {
                        sum = d.applyDiscount(sum, countWare);
                    }
                }

            }

        }

        System.out.println("Sum at the end: " + sum);
        System.out.println("INIT CALCULATE ALL BASKET");
        System.out.println();
        System.out.println();

        return sum;
    }

    public void addGlobalDiscount(Discount discount) {
        globalDiscounts.add(discount);
    }

}
