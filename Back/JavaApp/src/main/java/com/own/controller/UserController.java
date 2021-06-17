package com.own.controller;

import com.own.entity.User;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    public void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

}
