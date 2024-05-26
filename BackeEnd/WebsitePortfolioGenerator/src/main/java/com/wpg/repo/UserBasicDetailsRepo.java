package com.wpg.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wpg.model.UserBasicDetails;

public interface UserBasicDetailsRepo extends JpaRepository<UserBasicDetails, Long>{

}
