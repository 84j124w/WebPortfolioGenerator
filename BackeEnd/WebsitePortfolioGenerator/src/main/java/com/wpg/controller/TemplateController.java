package com.wpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.Template;
import com.wpg.service.TemplateService;

@RestController
@RequestMapping("/api/template")
@CrossOrigin(origins = "http://localhost:3000")
public class TemplateController {
	@Autowired
	TemplateService service;
	
	@GetMapping
	public List<Template> getAllUserTemplates(){
		return service.getAllUserTemplate();
	}
	
	@PostMapping
	public Template saveUserTemplate(@RequestBody Template template) {
		return service.saveUserTemplate(template);
	}

}
