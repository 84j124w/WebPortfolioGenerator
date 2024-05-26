package com.wpg.service;

import java.util.List;

import com.wpg.model.UserTemplate;

public interface UserTemplateService {
    List<UserTemplate> getAllUserTemplates();
    UserTemplate saveUserTemplate(UserTemplate userTemplate);
}
