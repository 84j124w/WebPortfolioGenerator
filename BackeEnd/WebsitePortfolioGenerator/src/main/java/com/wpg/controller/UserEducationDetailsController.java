package com.wpg.controller;

import java.util.List;

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
	public List<UserEducationDetails> getAllUserEducationDetails(){
		return educationDetailsService.getAllUserEducationDetails();
	}
	
	@PostMapping
	public UserEducationDetails saveUserEducationDetails(@RequestBody UserEducationDetails educationDetails) {
		return educationDetailsService.saveUserEducationDetails(educationDetails);
	}
}
