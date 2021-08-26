package com.own.service;

import com.own.additional.BasketPosition;
import com.own.entity.Discount;
import com.own.entity.DiscountPersonal;
import com.own.entity.Position;
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

        for (BasketPosition basketPosition : basketPositions) {

            Position currentPosition = positionRepository.getById(basketPosition.getPos().getId());
            System.out.println("CURRENT POSITION:" + currentPosition);

//            if () {
//                System.out.println("INSIDE DISCOUNTS");
                if (currentPosition.getDiscounts() != null && !currentPosition.getDiscounts().isEmpty()) {
                    System.out.println("INSIDE DISCOUNTS NOT EMPTY");

                    ArrayList<Double> stackablePrice = new ArrayList<>();
                    ArrayList<Double> unstackablePrice = new ArrayList<>();
                    ArrayList<Discount> stackableDiscounts = new ArrayList<>();
                    ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

                    for (Discount discount : currentPosition.getDiscounts()) {
                        if (discount.isStackable()) {
                            stackableDiscounts.add(discount);
                        } else {
                            unstackableDiscounts.add(discount);
                        }
                    }
                    for (Discount discount : stackableDiscounts) {
                        stackablePrice.add(discount.applyDiscount(currentPosition.getPrice(), basketPosition.getNum()));
                    }

                    System.out.println(stackablePrice);
                    System.out.println(unstackableDiscounts);

                    double currentSum = 0;
                    if (!stackablePrice.isEmpty()) {
                        currentSum = Collections.min(stackablePrice);
                    } else {
                        currentSum = currentPosition.getPrice() * basketPosition.getNum();
                    }

                    System.out.println("Current Sum after stackble: " + currentSum);

                    for (Discount discount : unstackableDiscounts) {
                        currentSum = discount.applyDiscount(currentSum, basketPosition.getNum());
                    }

                    System.out.println("Current Sum after unstackble: " + currentSum);

                    sum += currentSum;

                } else {
                    System.out.println("NO DISCOUNTS");
                    sum += currentPosition.getPrice() * basketPosition.getNum();
                }
//            }
        }

        System.out.println("Sum before global: " + sum);
        sum = applyPersonalDiscounts(basketPositions, sum, username);
        System.out.println("Sum after Personal: " + sum);
        sum = applyGlobalDiscounts(basketPositions, sum);
        System.out.println("Sum after Global: " + sum);


        // personal discount from repository
//        Set<Discount> personalDiscounts = userRepository.findByUsername(username).get().getDiscounts();;
//
//        int countWare = countWare(basketPositions);
//
//        ArrayList<Double> stackablePrice = new ArrayList<>();
//        ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

//        for (BasketPosition countPosition : basketPositions) {
//            countWare += countPosition.getNum();
//        }
//        System.out.println("Count Ware: " + countWare);

//        if (personalDiscounts != null && !personalDiscounts.isEmpty()) {
//            for (Discount discount : personalDiscounts) {
//                if (discount.isStackable()) {
//                    stackablePrice.add(discount.applyDiscount(sum, countWare));
//                } else {
//                    unstackableDiscounts.add(discount);
//                }
//
//            }
//            if (!stackablePrice.isEmpty()) {
//                sum = Collections.min(stackablePrice);
//            }
//            for (Discount d : unstackableDiscounts) {
//                sum = d.applyDiscount(sum, countWare);
//            }
//        }

//        System.out.println("Sum after global: " + sum);
//
//        stackablePrice.clear();
//        unstackableDiscounts.clear();
//        System.out.println("AFTER CLEAR " + stackablePrice);
//        System.out.println("AFTER CLEAR " + unstackableDiscounts);

//        if (!globalDiscounts.isEmpty()) {
//
//            for (Discount d : globalDiscounts) {
//                System.out.println(d.getName());
//                if (d.isStackable()) {
//                    stackablePrice.add(d.applyDiscount(sum, countWare));
//                } else {
//                    unstackableDiscounts.add(d);
//                }
//
//            }
//            if (!stackablePrice.isEmpty()) {
//                sum = Collections.min(stackablePrice);
//            }
//
//            if (!unstackableDiscounts.isEmpty()) {
//                for (Discount d : unstackableDiscounts) {
//                    sum = d.applyDiscount(sum, countWare);
//                }
//            }
//
//        }

        System.out.println("Sum at the end: " + sum);
        System.out.println("INIT CALCULATE ALL BASKET");
        System.out.println();
        System.out.println();

        return sum;
    }

    public double applyGlobalDiscounts(BasketPosition[] basketPositions, double sum) {
        int countWare = countWare(basketPositions);

        ArrayList<Double> stackablePrice = new ArrayList<>();
        ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

//        double currentSum;

        if (!globalDiscounts.isEmpty()) {

            for (Discount discount : globalDiscounts) {
//                System.out.println(discount.getName());
                if (discount.isStackable()) {
                    stackablePrice.add(discount.applyDiscount(sum, countWare));
                } else {
                    unstackableDiscounts.add(discount);
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

        return sum;
    }

    public double applyPersonalDiscounts(BasketPosition[] basketPositions, double sum, String username) {
        int countWare = countWare(basketPositions);

        ArrayList<Double> stackablePrice = new ArrayList<>();
        ArrayList<Discount> unstackableDiscounts = new ArrayList<>();

        // personal discount from repository
        Set<Discount> personalDiscounts = userRepository.findByUsername(username).get().getDiscounts();;

        if (personalDiscounts != null && !personalDiscounts.isEmpty()) {
            for (Discount discount : personalDiscounts) {
                if (discount.isStackable()) {
                    stackablePrice.add(discount.applyDiscount(sum, countWare));
                } else {
                    unstackableDiscounts.add(discount);
                }
            }

            System.out.println(stackablePrice);
            System.out.println(unstackableDiscounts);

            if (!stackablePrice.isEmpty()) {
                sum = Collections.min(stackablePrice);
            }
            for (Discount discount : unstackableDiscounts) {
                sum = discount.applyDiscount(sum, countWare);
            }
        }

        return sum;



    }

    public int countWare(BasketPosition[] basketPositions) {
        int countWare = 0;
        for (BasketPosition countPosition : basketPositions) {
            countWare += countPosition.getNum();
        }
        System.out.println("Count Ware: " + countWare);
        return countWare;
    }

    public void addGlobalDiscount(Discount discount) {
        globalDiscounts.add(discount);
    }

}
