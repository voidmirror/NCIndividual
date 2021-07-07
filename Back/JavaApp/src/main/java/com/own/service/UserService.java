package com.own.service;

import com.own.entity.User;
import com.own.exception.UserLoginAlreadyExistsException;
import com.own.exception.UserNotFoundException;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.validation.Valid;
import java.security.SecureRandom;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private PBKDF2Hasher hasher;

    @Autowired
    private Pbkdf2PasswordEncoder encoder;

    public User loginUser(User user) throws UserNotFoundException {
        User found = userRepository.findByLogin(user.getLogin());
        if (found == null) {
            String message = "User with this login does not exists: " + user.getLogin();
            throw new UserNotFoundException(message);
        }
//        return hasher.checkPassword(user.getPassword(), login.getPassword());
        if (encoder.matches(user.getPassword(), found.getPassword())) {
            return found;
        } else {
            return null;
        }
    }

    public User signUp(@Valid User user) throws UserLoginAlreadyExistsException {
        System.out.println(user);
//        User existed = userRepository.findByLogin(user.getLogin());
        if (userRepository.findByLogin(user.getLogin()) != null) {
            String message = "User with this login already exists: " + user.getLogin();
            throw new UserLoginAlreadyExistsException(message);
        }

//        user.setPassword(hasher.hash(user.getPassword()));
//        PasswordEncoder passwordEncoder = new Pbkdf2PasswordEncoder();

        String s = encoder.encode(user.getPassword());
        user.setPassword(s);

        return userRepository.save(user);
    }

}
