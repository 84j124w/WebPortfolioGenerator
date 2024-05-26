package com.wpg.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wpg.model.UserTemplate;

public interface UserTemplateRepo extends JpaRepository<UserTemplate, Long> {

}