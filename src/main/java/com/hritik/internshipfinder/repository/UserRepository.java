package com.hritik.internshipfinder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hritik.internshipfinder.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
}