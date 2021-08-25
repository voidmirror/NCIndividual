package com.own.controller;

import com.own.additional.RoleChanger;
import com.own.entity.User;
import com.own.exception.UserLoginAlreadyExistsException;
import com.own.exception.UserNotFoundException;
import com.own.repository.UserRepository;
import com.own.service.PBKDF2Hasher;
import com.own.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
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

//    @PreAuthorize(value = "USER")
    @GetMapping("/all")
    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(value = "/add", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public void addUser(@RequestBody User user) throws UserLoginAlreadyExistsException {
        System.out.println(user);
        userService.signUp(user);
//        userRepository.save(user);
        System.out.println(userRepository.findByUsername(user.getUsername()));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "/add", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public void changeUserRole(@RequestBody RoleChanger roleChanger) throws UserLoginAlreadyExistsException {
        System.out.println(roleChanger.toString());
        userService.changeUser(roleChanger);
//        userRepository.save(user);
//        System.out.println(userRepository.findByUsername(user.getUsername()));
    }

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
