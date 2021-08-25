package com.own.controller;

import com.own.entity.Position;
import com.own.exception.ResourceNotFoundException;
import com.own.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/v1")
@CrossOrigin(origins = "http://localhost:4200")
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

    @PreAuthorize("hasRole('WAREHOUSE_MANAGER')")
    @PostMapping(value = "/positions", consumes = {MediaType.APPLICATION_JSON_VALUE})
//    @PreAuthorize("hasRole('ROLE_STOREKEEPER')")
    public void addPosition(@RequestBody Position position) {
        positionRepository.save(position);
    }

    @PreAuthorize("hasRole('WAREHOUSE_MANAGER')")
    @PostMapping(value = "/positions/delete", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public void deletePosition(@RequestBody Position position) {
        System.out.println(position);
        positionRepository.delete(position);
    }

    @PreAuthorize("hasRole('WAREHOUSE_MANAGER')")
    @PutMapping(value = "/positions", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public void editPosition(@RequestBody Position position) {
        System.out.println(position);
        System.out.println(positionRepository.findById(position.getId()));
        positionRepository.save(position);
        System.out.println(positionRepository.findById(position.getId()));
    }

}
