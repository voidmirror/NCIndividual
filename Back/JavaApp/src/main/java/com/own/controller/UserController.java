package com.own.controller;

import com.own.entity.User;
import com.own.repository.UserRepository;
import com.own.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/v1/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    public void addUser(@RequestBody User user) {
        System.out.println(user);
        userRepository.save(user);
    }

    @PostMapping("/login")
    public void loginUser(@RequestBody User user) {
        if (userService.loginUser(user)) {
            System.out.println(user.getLogin() + " logged IN!");
        } else {
            System.out.println("Problem with " + user.getLogin());
        }
    }

}
