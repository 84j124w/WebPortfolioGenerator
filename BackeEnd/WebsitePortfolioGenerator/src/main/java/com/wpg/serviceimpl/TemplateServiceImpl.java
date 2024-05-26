package com.wpg.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.Template;
import com.wpg.repo.TemplateRepo;
import com.wpg.service.TemplateService;

@Service
public class TemplateServiceImpl implements TemplateService{
	@Autowired
    TemplateRepo templateRepo;

    @Override
    public List<Template> getAllUserTemplate() {
    	List<Template> templates = new ArrayList<>();
    	try {
    		templates = templateRepo.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
        return templates;
    }

    @Override
    public Template saveUserTemplate(Template template) {
    	Template userTemplate2 = null;
    	try {
    		userTemplate2 = templateRepo.save(template);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return userTemplate2;
    }
}
