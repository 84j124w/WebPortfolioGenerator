package com.wpg.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.UserEducationDetails;
import com.wpg.repo.UserEducationDetailsRepo;
import com.wpg.service.UserEducationDetailsService;

@Service
public class UserEducationDetailsServiceImpl implements UserEducationDetailsService{
	@Autowired
	UserEducationDetailsRepo educationDetailsRepo;

	@Override
	public List<UserEducationDetails> getAllUserEducationDetails() {
		List<UserEducationDetails> userEducationDetails = new ArrayList<>();
		try {
			userEducationDetails = educationDetailsRepo.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userEducationDetails;
	}

	@Override
	public List<UserEducationDetails> saveUserEducationDetails(List<UserEducationDetails> educationDetailsList) {
		List<UserEducationDetails> educationDetailsList2 = new ArrayList<>();
		try {
			educationDetailsList2 = educationDetailsRepo.saveAll(educationDetailsList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return educationDetailsList2;
	}

	@Override
	public List<UserEducationDetails> updateUserEducationDetails(List<UserEducationDetails> educationDetailsList) {
		List<UserEducationDetails> educationDetailsList2 = new ArrayList<>();
		try {
			educationDetailsList2 = educationDetailsRepo.saveAll(educationDetailsList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return educationDetailsList2;
	}

	@Override
	public boolean deleteUserEducationDetailsById(long id) {
		boolean result = false;
		try {
			Optional<UserEducationDetails> userEducationDetail = educationDetailsRepo.findById(id);
			if(userEducationDetail.isPresent()) {
				educationDetailsRepo.delete(userEducationDetail.get());
				result = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
