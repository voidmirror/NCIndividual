package com.own.controller;

import com.own.entity.User;
import com.own.exception.UserLoginAlreadyExistsException;
import com.own.exception.UserNotFoundException;
import com.own.repository.UserRepository;
import com.own.service.PBKDF2Hasher;
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

//    @PostMapping("/add")
//    public void addUser(@RequestBody User user) throws UserLoginAlreadyExistsException {
//        System.out.println(user);
//        userService.signUp(user);
////        userRepository.save(user);
//    }

//    @PostMapping("/login")
//    public void loginUser(@RequestBody User user) throws UserNotFoundException {
//        if (userService.loginUser(user) != null) {
//            System.out.println(user.getName() + " logged IN!");
//            System.out.println(user);
//        } else {
//            System.out.println("Problem with " + user.getUsername());
//        }
//    }

}
