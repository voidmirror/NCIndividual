package com.own.service;

import com.own.additional.BasketPosition;
import com.own.entity.Discount;
import com.own.entity.DiscountPersonal;
import com.own.repository.PositionRepository;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Service
public class BasketService {

    @Autowired
    private PositionRepository positionRepository;

    @Autowired
    private UserRepository userRepository;

    private ArrayList<Discount> globalDiscounts = new ArrayList<>();

    // Possibly add new features like sales or promo codes
    public double calculatePrice(BasketPosition basketPosition) {
        System.out.println(basketPosition.getNum() * basketPosition.getPos().getPrice());
        return basketPosition.getNum() * basketPosition.getPos().getPrice();
    }

    public double calculateAllBasket(BasketPosition[] basketPositions, String username) {

        double sum = 0;

        for (BasketPosition b : basketPositions) {

            if (b.getPos().getDiscounts() != null) {
                if (!b.getPos().getDiscounts().isEmpty()) {

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

                    double currentSum = Collections.min(stackablePrice);

                    for (Discount d : unstackableDiscounts) {
                        currentSum = d.applyDiscount(currentSum, b.getNum());
                    }

                    sum += currentSum;

                }
            } else {
                sum += b.getPos().getPrice() * b.getNum();
            }

            // personal discount from repository
            Set<Discount> personalDiscounts = userRepository.findByUsername(username).get().getDiscounts();;

            int countWare = 0;

            ArrayList<Double> stackablePrice = new ArrayList<>();
            ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

            for (BasketPosition basketPosition : basketPositions) {
                countWare += basketPosition.getNum();
            }

            if (personalDiscounts != null && !personalDiscounts.isEmpty()) {
                for (Discount d : personalDiscounts) {
                    if (d.isStackable()) {
                        stackablePrice.add(d.applyDiscount(sum, countWare));
                    } else {
                        unstackableDiscounts.add(d);
                    }

                }
                sum = Collections.min(stackablePrice);
                for (Discount d : unstackableDiscounts) {
                    sum = d.applyDiscount(sum, countWare);
                }
            }

            stackablePrice.clear();
            unstackableDiscounts.clear();
            System.out.println("AFTER CLEAR " + stackablePrice);
            System.out.println("AFTER CLEAR " + unstackableDiscounts);

            if (globalDiscounts != null && !globalDiscounts.isEmpty()) {

                for (Discount d : globalDiscounts) {
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

        return sum;
    }

    public void addGlobalDiscount(Discount discount) {
        globalDiscounts.add(discount);
    }

}
