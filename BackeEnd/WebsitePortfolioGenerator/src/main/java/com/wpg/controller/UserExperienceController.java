package com.wpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.UserExperience;
import com.wpg.service.UserExperienceService;

@RestController
@RequestMapping("/api/user-experience")
@CrossOrigin(origins = "http://localhost:3000")
public class UserExperienceController {
	@Autowired
	UserExperienceService experienceService;
	
	@GetMapping
	public List<UserExperience> getAll(){
		return experienceService.getAllUserExperience();
	}
	
	@PostMapping
	public UserExperience saveUserExperience(@RequestBody UserExperience experience) {
		return experienceService.saveUserExperience(experience);
	}
}
