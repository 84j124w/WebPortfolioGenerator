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
	public List<UserProject> saveUserProject(List<UserProject> userProjects) {
		List<UserProject> userProjects2 = new ArrayList<>();
		try {
			userProjects2 = projectRepo.saveAll(userProjects);
		} catch (Exception e) {

		}
		return userProjects2;
	}

}
