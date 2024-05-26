package com.wpg.service;

import java.util.List;

import com.wpg.model.Template;

public interface TemplateService {
	List<Template> getAllUserTemplate();
	Template saveUserTemplate(Template template);
}
