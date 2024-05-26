package com.wpg.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.UserTemplate;
import com.wpg.repo.UserTemplateRepo;
import com.wpg.service.UserTemplateService;

@Service
public class UserTemplateServiceImpl implements UserTemplateService {

    @Autowired
    UserTemplateRepo userTemplateRepo;

    @Override
    public List<UserTemplate> getAllUserTemplates() {
        return userTemplateRepo.findAll();
    }

    @Override
    public UserTemplate saveUserTemplate(UserTemplate userTemplate) {
        return userTemplateRepo.save(userTemplate);
    }
}
