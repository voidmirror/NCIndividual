package com.own.component;

import com.own.entity.*;
import com.own.repository.*;
import com.own.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Component
public class SetupDataLoader implements
        ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PositionRepository positionRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;

    @Autowired
    private DiscountRepository discountRepository;

    @Autowired
    private BasketService basketService;

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
        Role adminRole = roleRepository.findByName("ADMIN");


        User whmanager = new User();
        whmanager.setName("WAREHOUSE MANAGER");
        whmanager.setUsername("whmanager");
        whmanager.setPassword(passwordEncoder.encode("whmanager"));
        whmanager.setEmail("whmanager@test.com");
        whmanager.setPhoneNumber("80009998877");
        whmanager.setRoles(new HashSet<>(Collections.singletonList(warehouseManagerRole)));
        userRepository.save(whmanager);


        User admin = new User();
        admin.setName("ADMIN");
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode("admin"));
        admin.setEmail("admin@test.com");
        admin.setPhoneNumber("97787653443");
        admin.setRoles(new HashSet<>(Collections.singletonList(adminRole)));
        userRepository.save(admin);

        Position position = new Position();
        position.setName("Sneakers");
        position.setPrice(456.50);
        position.setDescription("Comfortable");
        position.setCategory("Shoes");
        positionRepository.save(position);

        Position position1 = new Position();
        position1.setName("Hoop");
        position1.setPrice(340);
        position1.setDescription("Lightweight");
        position1.setCategory("Equipment");
        positionRepository.save(position1);

        Position position2 = new Position();
        position2.setName("Football boots");
        position2.setPrice(580.50);
        position2.setDescription("For free far run");
        position2.setCategory("Football");
        positionRepository.save(position2);

        Position position3 = new Position();
        position3.setName("Hockey stick");
        position3.setPrice(365.99);
        position3.setDescription("Durable");
        position3.setCategory("Hockey");
        positionRepository.save(position3);

        Position position4 = new Position();
        position4.setName("Basketball ball");
        position4.setPrice(280);
        position4.setDescription("Really round");
        position4.setCategory("Basketball");
        positionRepository.save(position4);

        Position position5 = new Position();
        position5.setName("Tatami mat");
        position5.setPrice(580);
        position5.setDescription("Soft");
        position5.setCategory("Equipment");
        positionRepository.save(position5);

        Discount5per discount5per = new Discount5per();
        discount5per.setStackable(true);
        discountRepository.save(discount5per);

        Discount10per discount10per = new Discount10per();
        discount10per.setStackable(true);
        discountRepository.save(discount10per);

        DiscountPersonal discountPersonal = new DiscountPersonal();
        discountPersonal.setStackable(false);
        discountRepository.save(discountPersonal);

        DiscountGlobal discountGlobal = new DiscountGlobal();
        discountGlobal.setStackable(false);
        basketService.addGlobalDiscount(discountGlobal);
        discountRepository.save(discountGlobal);


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