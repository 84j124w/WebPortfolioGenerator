package com.wpg.service;

import java.util.List;

import com.wpg.model.UserEducationDetails;

public interface UserEducationDetailsService {
	List<UserEducationDetails> getAllUserEducationDetails();
	List<UserEducationDetails> saveUserEducationDetails(List<UserEducationDetails> educationDetailsList);
	List<UserEducationDetails> updateUserEducationDetails(List<UserEducationDetails> educationDetailsList);
	boolean deleteUserEducationDetailsById(long id);
}
