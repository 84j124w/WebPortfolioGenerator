package com.wpg.controller;

import java.util.List;

import com.wpg.payload.UserBasicDetailsDto;
import com.wpg.utils.UserBasicDetailsMapperHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.UserBasicDetails;
import com.wpg.service.UserBasicDetailsService;

@RestController
@RequestMapping("/api/user-basic-details")
@CrossOrigin(origins = "http://localhost:3000")
public class UserBasicDetailsController {
	@Autowired
	UserBasicDetailsService basicDetailsService;
	
	@GetMapping
	public List<UserBasicDetails> getAllUserBasicDetails(){
		return basicDetailsService.getAllUserBasicDetails();
	}
	
	@PostMapping
	public UserBasicDetails saveUserBasicDetails(@RequestBody UserBasicDetailsDto basicDetailsDto) {
		UserBasicDetails userBasicDetails = UserBasicDetailsMapperHelper.userBasicDetailsDtoToUserBasicDetails(basicDetailsDto);
		return basicDetailsService.saveUserBasicDetails(userBasicDetails);
	}

}
