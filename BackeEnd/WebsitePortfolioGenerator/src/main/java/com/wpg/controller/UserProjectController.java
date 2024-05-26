package com.wpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.UserProject;
import com.wpg.service.UserProjectService;

@RestController
@RequestMapping("/api/user-project")
@CrossOrigin(origins = "http://localhost:3000")
public class UserProjectController {
	@Autowired
	UserProjectService projectService;
	
	@GetMapping
	public List<UserProject> getAll(){
		return projectService.getAllUserProject();
	}
	
	@PostMapping
	public UserProject saveUserProject(@RequestBody UserProject userProject) {
		return projectService.saveUserProject(userProject);
	}

}
