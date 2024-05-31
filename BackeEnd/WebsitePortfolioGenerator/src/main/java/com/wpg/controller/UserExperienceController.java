package com.wpg.controller;

import java.util.List;

import com.wpg.payload.UserExperienceDto;
import com.wpg.utils.UserExperienceMapper;
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
	public List<UserExperienceDto> getAll(){
		List<UserExperience> userExperiences = experienceService.getAllUserExperience();
		List<UserExperienceDto> userExperienceDtos =  UserExperienceMapper.userExperienceToUserExperienceDto(userExperiences);
		return userExperienceDtos;
	}
	
	@PostMapping
	public List<UserExperienceDto> saveUserExperience(@RequestBody List<UserExperienceDto> userExperienceDtos) {
		List<UserExperience> userExperiences  = UserExperienceMapper.userExperienceDtoToUserExperience(userExperienceDtos);
		List<UserExperience> experiences =experienceService.saveUserExperiences(userExperiences);
		List<UserExperienceDto> experienceDtos = UserExperienceMapper.userExperienceToUserExperienceDto(experiences);
		return experienceDtos;
	}
}
