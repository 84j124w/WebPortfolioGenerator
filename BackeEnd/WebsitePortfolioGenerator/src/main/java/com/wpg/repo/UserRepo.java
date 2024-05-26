package com.wpg.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wpg.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
}

