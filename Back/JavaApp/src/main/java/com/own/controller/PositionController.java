package com.own.controller;

import com.own.entity.Position;
import com.own.exception.ResourceNotFoundException;
import com.own.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/v1")
public class PositionController {

    @Autowired
    private PositionRepository positionRepository;

    @GetMapping("/positions")
    public List<Position> retrieveAllPositions() {
        return positionRepository.findAll();
    }

    @GetMapping("/positions/{id}")
    public ResponseEntity<Position> findPositionById(
            @PathVariable(value = "id") Integer positionId
    ) throws ResourceNotFoundException {
        Position position = positionRepository.findById(positionId)
                .orElseThrow(() -> new ResourceNotFoundException("Position not found for id: " + positionId));
        return ResponseEntity.ok().body(position);
    }

}
