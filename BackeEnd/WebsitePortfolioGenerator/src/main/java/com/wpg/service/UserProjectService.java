package com.wpg.service;

import java.util.List;

import com.wpg.model.UserProject;

public interface UserProjectService {
	List<UserProject> getAllUserProject();
	List<UserProject> saveUserProject(List<UserProject> userProjects);
}
