package com.wpg.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.UserExperience;
import com.wpg.repo.UserExperienceRepo;
import com.wpg.service.UserExperienceService;

@Service
public class UserExperienceServiceImpl implements UserExperienceService{
	@Autowired
	UserExperienceRepo experienceRepo;

	@Override
	public List<UserExperience> getAllUserExperience() {
		List<UserExperience> experiences = new ArrayList<>();
		try {
			experiences = experienceRepo.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return experiences;
	}

	@Override
	public UserExperience saveUserExperience(UserExperience experience) {
		UserExperience experience2 = null;
		try {
			experience2 = experienceRepo.save(experience);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return experience2;
	}

}
