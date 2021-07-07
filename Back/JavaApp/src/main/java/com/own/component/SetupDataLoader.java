//package com.own.component;
//
//import com.own.entity.Privilege;
//import com.own.entity.Role;
//import com.own.repository.PrivilegeRepository;
//import com.own.repository.RoleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.event.ContextRefreshedEvent;
//import org.springframework.stereotype.Component;
//
//import javax.transaction.Transactional;
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.List;
//
//@Component
//public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {
//
//    boolean alreadySetup = false;
//
//    @Autowired
//    private PrivilegeRepository privilegeRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Override
//    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
//
//        if (alreadySetup) {
//            return;
//        }
//
//        Privilege privilege = createPrivilegeIfNotFound("PRIVILEGE_ADDWARE");
//
//        List<Privilege> storekeeperPrivileges = Arrays.asList(privilege);
//
//        Role roleStorekeeper = createRoleIfNotFound("ROLE_STOREKEEPER", storekeeperPrivileges);
//
//
//
//    }
//
//    @Transactional
//    public Privilege createPrivilegeIfNotFound(String name) {
//        Privilege privilege = privilegeRepository.findByName(name);
//        if (privilege == null) {
//            privilege = new Privilege(name);
//            privilegeRepository.save(privilege);
//        }
//        return privilege;
//    }
//
//    @Transactional
//    public Role createRoleIfNotFound(String name, Collection<Privilege> privileges) {
//        Role role = roleRepository.findByName(name);
//        if (role == null) {
//            role = new Role(name);
//            roleRepository.save(role);
//        }
//        return role;
//    }
//}
