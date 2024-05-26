package com.wpg.service;

import java.util.List;

import com.wpg.model.UserEducationDetails;

public interface UserEducationDetailsService {
	List<UserEducationDetails> getAllUserEducationDetails();
	UserEducationDetails saveUserEducationDetails(UserEducationDetails educationDetails);
	UserEducationDetails updateUserEducationDetails(UserEducationDetails educationDetails);
	boolean deleteUserEducationDetailsById(long id);
}
