package com.wpg.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wpg.model.Template;

public interface TemplateRepo extends JpaRepository<Template, Long> {

}