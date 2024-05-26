package com.wpg.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.UserProject;
import com.wpg.repo.UserProjectRepo;
import com.wpg.service.UserProjectService;

@Service
public class UserProjectServiceImpl implements UserProjectService {

	@Autowired
	UserProjectRepo projectRepo;

	@Override
	public List<UserProject> getAllUserProject() {
		List<UserProject> projects = new ArrayList<>();
		try {
			projects = projectRepo.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return projects;
	}

	@Override
	public UserProject saveUserProject(UserProject userProject) {
		UserProject userProject2 = null;
		try {
			userProject2 = projectRepo.save(userProject);
		} catch (Exception e) {

		}
		return userProject2;
	}

}
