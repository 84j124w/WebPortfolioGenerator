package com.wpg.service;

import java.util.List;

import com.wpg.model.UserProject;

public interface UserProjectService {
	List<UserProject> getAllUserProject();
	UserProject saveUserProject(UserProject userProject);
}
