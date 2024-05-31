package com.wpg.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpg.model.UserBasicDetails;
import com.wpg.repo.UserBasicDetailsRepo;
import com.wpg.service.UserBasicDetailsService;

@Service
public class UserBasicDetailsServiceImpl implements UserBasicDetailsService{
	@Autowired
	UserBasicDetailsRepo userBasicDetailsRepo;

	@Override
	public UserBasicDetails saveUserBasicDetails(UserBasicDetails userBasicDetails) {
		UserBasicDetails userBasicDetails2 = null;
		try {
			userBasicDetails2 = userBasicDetailsRepo.save(userBasicDetails);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userBasicDetails2;
	}

	@Override
	public List<UserBasicDetails> getAllUserBasicDetails() {
		List<UserBasicDetails> basicUserDetailsList = new ArrayList<>();
		try {
			basicUserDetailsList = userBasicDetailsRepo.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return basicUserDetailsList;
	}

	@Override
	public UserBasicDetails updateUserBasicDetails(UserBasicDetails userBasicDetails) {
		UserBasicDetails userBasicDetails2 = null;
		try {
			userBasicDetails2 = userBasicDetailsRepo.save(userBasicDetails);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userBasicDetails2;
	}

	@Override
	public boolean deleteUserBasicDetailsById(long id) {
		boolean result = false;
		try {
			Optional<UserBasicDetails> basicDetails = userBasicDetailsRepo.findById(id);
			if(basicDetails.isPresent()) {
				userBasicDetailsRepo.delete(basicDetails.get());
				result = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public UserBasicDetails findByEmail(String email) {
		UserBasicDetails details = null;
		try {
			details = userBasicDetailsRepo.findByEmail(email);
		}
		catch (Exception e){
			e.printStackTrace();
		}
		return details;
	}

}
