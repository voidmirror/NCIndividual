package com.own.component;

import com.own.entity.Privilege;
import com.own.entity.Role;
import com.own.entity.User;
import com.own.repository.PrivilegeRepository;
import com.own.repository.RoleRepository;
import com.own.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Component
public class SetupDataLoader implements
        ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;

    @Autowired
    private Pbkdf2PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {

        if (alreadySetup)
            return;
        Privilege editCatalogPrivilege
                = createPrivilegeIfNotFound("EDIT_CATALOG");
        Privilege addwarePrivilege
                = createPrivilegeIfNotFound("ADDWARE");
        Privilege edituserPrivilege
                = createPrivilegeIfNotFound("EDIT_USER");
        Privilege viewProfilePrivilege
                = createPrivilegeIfNotFound("VIEW_PROFILE");


        List<Privilege> warehouseManagerPrivileges = Arrays.asList(
                editCatalogPrivilege, editCatalogPrivilege);
        List<Privilege> adminPrivileges = Arrays.asList(
                edituserPrivilege);
        List<Privilege> userPrivileges = Arrays.asList(
                viewProfilePrivilege);
        createRoleIfNotFound("WAREHOUSE_MANAGER", warehouseManagerPrivileges);
        createRoleIfNotFound("ADMIN", adminPrivileges);
        createRoleIfNotFound("USER", userPrivileges);
//        createRoleIfNotFound("USER", Arrays.asList(readPrivilege));

        Role warehouseManagerRole = roleRepository.findByName("WAREHOUSE_MANAGER");
        User user = new User();
        user.setName("WAREHOUSE MANAGER");
        user.setUsername("whmanager");
        user.setPassword(passwordEncoder.encode("whpass"));
        user.setEmail("whmanager@test.com");
        user.setPhoneNumber("80009998877");
        user.setRoles(Arrays.asList(warehouseManagerRole));
        userRepository.save(user);

        alreadySetup = true;
    }

    @Transactional
    Privilege createPrivilegeIfNotFound(String name) {

        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    Role createRoleIfNotFound(
            String name, Collection<Privilege> privileges) {

        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}