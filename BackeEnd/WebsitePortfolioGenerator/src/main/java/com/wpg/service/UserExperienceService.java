package com.wpg.service;

import java.util.List;

import com.wpg.model.UserExperience;

public interface UserExperienceService {
	List<UserExperience> getAllUserExperience();
	UserExperience saveUserExperience(UserExperience experience);
}
