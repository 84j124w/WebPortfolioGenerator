package com.wpg.service;

import java.util.List;

import com.wpg.model.UserBasicDetails;

public interface UserBasicDetailsService {
	UserBasicDetails saveUserBasicDetails(UserBasicDetails userBasicDetails);
	List<UserBasicDetails> getAllUserBasicDetails();
	UserBasicDetails updateUserBasicDetails(UserBasicDetails userBasicDetails);
	boolean deleteUserBasicDetailsById(long id);
	UserBasicDetails findByEmail(String email);

}
