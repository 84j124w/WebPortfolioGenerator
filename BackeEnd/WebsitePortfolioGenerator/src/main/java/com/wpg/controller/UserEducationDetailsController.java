package com.wpg.controller;

import java.util.List;

import com.wpg.payload.UserEducationDto;
import com.wpg.utils.UserEducationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.UserEducationDetails;
import com.wpg.service.UserEducationDetailsService;

@RestController
@RequestMapping("/api/user-education-details")
@CrossOrigin(origins = "http://localhost:3000")
public class UserEducationDetailsController {
	@Autowired
	UserEducationDetailsService educationDetailsService;

	@GetMapping
	public List<UserEducationDto> getAllUserEducationDetails() {
		List<UserEducationDetails> educationDetails = educationDetailsService.getAllUserEducationDetails();
		for(UserEducationDetails educationDetails1: educationDetails){
			System.out.println(educationDetails1.getCourseEndedDate()+" "+educationDetails1.getCourseStartedDate());
		}

		return UserEducationMapper.userEducationToUserEducationDto(educationDetails);
	}

	@PostMapping
	public List<UserEducationDto> saveUserEducationDetails(@RequestBody List<UserEducationDto> educationDtos) {
		List<UserEducationDetails> educationDetails = UserEducationMapper.userEducationDtoToUserEducation(educationDtos);
		List<UserEducationDetails> savedDetails = educationDetailsService.saveUserEducationDetails(educationDetails);
		return UserEducationMapper.userEducationToUserEducationDto(savedDetails);
	}
}
