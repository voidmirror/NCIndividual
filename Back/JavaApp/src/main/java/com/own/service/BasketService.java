package com.own.service;

import com.own.additional.BasketPosition;
import com.own.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasketService {

    @Autowired
    private PositionRepository positionRepository;

    // Possibly add new features like sales or promo codes
    public double calculatePrice(BasketPosition basketPosition) {
        return basketPosition.getNum() * basketPosition.getPos().getPrice();
    }

}
