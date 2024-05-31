package com.wpg.model;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_experience")
public class UserExperience {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long userId;
	@Column(name="company_name")
	private String companyName;
	@Column(name="working_started_date")
	private LocalDate workingStartedDate;
	@Column(name="working_ended_date")
	private LocalDate workingEndedDate;
	@Column(name="total_experience")
	private double totalExperience;
	@Column(name="is_currently_working")
	private int isCurrentlyWorking;
	@Column(name="created_at")
	private Date createdAt;
	public UserExperience() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserExperience(long id, long userId, String companyName, LocalDate workingStartedDate, LocalDate workingEndedDate,
			double totalExperience, int isCurrentlyWorking, Date createdAt) {
		super();
		this.id = id;
		this.userId = userId;
		this.companyName = companyName;
		this.workingStartedDate = workingStartedDate;
		this.workingEndedDate = workingEndedDate;
		this.totalExperience = totalExperience;
		this.isCurrentlyWorking = isCurrentlyWorking;
		this.createdAt = createdAt;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public LocalDate getWorkingStartedDate() {
		return workingStartedDate;
	}
	public void setWorkingStartedDate(LocalDate workingStartedDate) {
		this.workingStartedDate = workingStartedDate;
	}
	public LocalDate getWorkingEndedDate() {
		return workingEndedDate;
	}
	public void setWorkingEndedDate(LocalDate workingEndedDate) {
		this.workingEndedDate = workingEndedDate;
	}
	public double getTotalExperience() {
		return totalExperience;
	}
	public void setTotalExperience(double totalExperience) {
		this.totalExperience = totalExperience;
	}
	public int getIsCurrentlyWorking() {
		return isCurrentlyWorking;
	}
	public void setIsCurrentlyWorking(int isCurrentlyWorking) {
		this.isCurrentlyWorking = isCurrentlyWorking;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
