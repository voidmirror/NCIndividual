package com.own.service;

import com.own.entity.User;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean loginUser(User user) {
        List<User> list = userRepository.findByLogin(user.getLogin());
        return list.size() > 0;
    }

}
