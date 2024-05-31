package com.wpg.service;

import java.util.List;

import com.wpg.model.UserExperience;

public interface UserExperienceService {
	List<UserExperience> getAllUserExperience();
	List<UserExperience> saveUserExperiences(List<UserExperience> experiences);
}
