package com.wpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wpg.model.UserTemplate;
import com.wpg.service.UserTemplateService;

@RestController
@RequestMapping("/api/user-template")
@CrossOrigin(origins = "http://localhost:3000")
public class UserTemplateController {

    @Autowired
    UserTemplateService userTemplateService;

    @GetMapping
    public List<UserTemplate> getAllUserTemplates(){
        return userTemplateService.getAllUserTemplates();
    }

    @PostMapping
    public UserTemplate saveUserTemplate(@RequestBody UserTemplate userTemplate) {
        return userTemplateService.saveUserTemplate(userTemplate);
    }
}
